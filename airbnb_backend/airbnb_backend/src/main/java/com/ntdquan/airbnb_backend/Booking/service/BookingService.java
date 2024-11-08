package com.ntdquan.airbnb_backend.Booking.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.stereotype.Service;

import com.ntdquan.airbnb_backend.Booking.dto.Response.BookingPrice;
import com.ntdquan.airbnb_backend.Booking.dto.Response.BookingResponse;
import com.ntdquan.airbnb_backend.Booking.dto.Resquest.BookingRequestDTO;
import com.ntdquan.airbnb_backend.Booking.mapper.BookingMapper;
import com.ntdquan.airbnb_backend.Booking.model.Booking;
import com.ntdquan.airbnb_backend.Booking.model.HomestayAvailability;
import com.ntdquan.airbnb_backend.Booking.repository.BookingRepository;
import com.ntdquan.airbnb_backend.Homestay.Model.Homestay;
import com.ntdquan.airbnb_backend.Homestay.Repository.HomestayRepository;
import com.ntdquan.airbnb_backend.Homestay.Service.HomestayService;
import com.ntdquan.airbnb_backend.constant.AvailabilityStatusEnum;
import com.ntdquan.airbnb_backend.constant.BookingStatusEnum;
import com.ntdquan.airbnb_backend.constant.HomestayStatusEnum;
import com.ntdquan.airbnb_backend.system.exception.BusinessException;
import com.ntdquan.airbnb_backend.user.Service.UserService;
import com.ntdquan.airbnb_backend.user.model.User;
import com.ntdquan.airbnb_backend.user.repositiory.UserRepository;

import jakarta.transaction.Transactional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
public class BookingService {
	private static Logger log = LoggerFactory.getLogger(BookingService.class);
	private final BookingRepository bookingRepository;
	private final UserService userService;
	private final HomestayRepository homestayRepository;
	private final AvailabilityService availabilityService;
	private final HomestayService homestayService;
	private final PricingService pricingService;
	private final BookingMapper mapper;

	public BookingService(BookingRepository bookingRepository, UserService userService,
			HomestayRepository homestayRepository, AvailabilityService availabilityService,
			HomestayService homestayService, PricingService pricingService, BookingMapper mapper) {
		super();
		this.bookingRepository = bookingRepository;
		this.userService = userService;
		this.homestayRepository = homestayRepository;
		this.availabilityService = availabilityService;
		this.homestayService = homestayService;
		this.pricingService = pricingService;
		this.mapper = mapper;
	}

	private Homestay validateHomestay(final BookingRequestDTO request) {
		Homestay homestay = homestayService.getHomestayById(request.getHomestayId());
		if (homestay == null) {
			throw new BusinessException("homestay not found");
		}

		if (homestay.getStatus() != HomestayStatusEnum.ACTIVE.getValue()) {
			throw new BusinessException("Homestay not active");
		}

		if (homestay.getMaxGuests() < request.getGuest()) {
			throw new BusinessException("Guest invalid");
		}

		return homestay;
	}

	@Transactional
	public BookingResponse book(final BookingRequestDTO request) throws InterruptedException {
		validateRequest(request);
		Homestay homestay = homestayService.getHomestayById(request.getHomestayId());
		log.info("Homestay got from id {}" , homestay.getId());
		User user = userService.getUserById(request.getUserId());
		
		final Long homestayId = request.getHomestayId();
		final LocalDate checkinDate = request.getCheckinDate();
		final LocalDate checkoutDate = request.getCheckoutDate();
		
		log.debug("[request_id={}] User user_id={} is acquiring lock homestay_id={} from checkin_date={} to checkout_date={}", request.getRequestId(), request.getUserId(), homestayId, checkinDate, checkoutDate);
		final List<HomestayAvailability> aDays = availabilityService.checkAvailabilityForBooking(homestay, checkinDate, checkoutDate);
		log.debug("[request_id={}] User user_id={} locked homestay_id={} from checkin_date={} to checkout_date={}", request.getRequestId(), request.getUserId(), request.getHomestayId(), checkinDate, checkoutDate);
		
		Thread.sleep(5000);
		
		final BookingPrice price = pricingService.calculate(aDays);
		final Booking booking = new Booking(
				homestay,
				user,
				BookingStatusEnum.BOOKED.getValue(),
				checkinDate,
				checkoutDate,
				price.getNightlyPrice(),
				price.getServiceFee(),
				price.getDiscount(),
				price.getTotalPrice(),
				request.getNote(),
				request.getRequestId(),
				request.getGuest()
				);
		
		aDays.forEach(a -> a.setAvailabilityStatus(AvailabilityStatusEnum.BOOKED.getValue()));
		
		availabilityService.saveAll(aDays);
		bookingRepository.save(booking);
		log.info("[request_id={}] User user_id={} created booking_id={} successfully", request.getRequestId(), request.getUserId(), booking.getId());
		return mapper.toResponse(booking);
	}
	
	private void validateRequest(final BookingRequestDTO request) {
		final LocalDate checkinDate = request.getCheckinDate();
		final LocalDate checkoutDate = request.getCheckoutDate();
		final LocalDate currentDate = LocalDate.now();
		
		if (checkinDate.isBefore(currentDate) || checkinDate.isAfter(checkoutDate)) {
			throw new BusinessException("Check in date invalid");
		}
		
		if (request.getGuest() <= 0) {
			throw new BusinessException("Guests invalid");
		}
	}
	
}
