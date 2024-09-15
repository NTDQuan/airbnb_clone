package com.ntdquan.airbnb_backend.Booking.Service;

import java.time.LocalDate;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.ntdquan.airbnb_backend.Booking.DTO.BookingRequest;
import com.ntdquan.airbnb_backend.Booking.DTO.BookingResponse;
import com.ntdquan.airbnb_backend.Booking.Model.Booking;
import com.ntdquan.airbnb_backend.Booking.Repository.BookingRepository;
import com.ntdquan.airbnb_backend.Booking.mapper.BookingMapper;
import com.ntdquan.airbnb_backend.Homestay.Model.Homestay;
import com.ntdquan.airbnb_backend.Homestay.Service.HomestayService;
import com.ntdquan.airbnb_backend.constant.AvailabilityStatus;
import com.ntdquan.airbnb_backend.constant.BookingStatus;
import com.ntdquan.airbnb_backend.constant.HomestayStatus;
import com.ntdquan.airbnb_backend.exception.BusinessException;
import com.ntdquan.airbnb_backend.user.Service.UserService;
import com.ntdquan.airbnb_backend.user.auth.JwtService;
import com.ntdquan.airbnb_backend.user.model.User;
import com.ntdquan.airbnb_backend.user.repositiory.UserRepository;

import jakarta.transaction.Transactional;

@Service
public class BookingService {
	Logger logger = LoggerFactory.getLogger(BookingService.class);
	
	private final BookingRepository bookingRepository;
	private final AvailabilityService availabilityService;
	private final HomestayService homestayService;
	private final PricingService pricingService;
	private final UserService userService;
	private final JwtService jwtService;
	private final BookingMapper mapper;
	
	public BookingService(BookingRepository bookingRepository, AvailabilityService availabilityService, JwtService jwtService
			,HomestayService homestayService, PricingService pricingService, UserService userService, BookingMapper mapper) {
		super();
		this.bookingRepository = bookingRepository;
		this.availabilityService = availabilityService;
		this.homestayService = homestayService;
		this.pricingService = pricingService;
		this.userService = userService;
		this.jwtService = jwtService;
		this.mapper = mapper;
	}
	
	@Transactional
	public BookingResponse book(final BookingRequest request) throws InterruptedException {
		validateRequest(request);
		
		
		final Long homestayId = request.getHomestayId();
		final User currentUser = jwtService.getSession();
		final LocalDate checkinDate = request.getCheckInDate();
		final LocalDate checkoutDate = request.getCheckOutDate();
		
		logger.debug("[request_id={}] User user_id is acquiring lock homestay_id={} from checkin_date={} to checkout_date={}", request.getRequestId(), request.getUserId(), checkinDate, checkoutDate);
		final var aDays = availabilityService.checkAvailabilityForBooking(homestayId, checkinDate, checkoutDate);
		logger.debug("[request_di={}] User user_id={} locked homestay_id={} from checkin_date={} to checkout_date={}", request.getRequestId(), request.getUserId(), request.getHomestayId(), checkinDate, checkoutDate);;
		
		Thread.sleep(5000);
		
		final var price = pricingService.calculate(aDays);
        final var booking = new Booking(currentUser, 
        								homestayService.getHomestayById(homestayId),
						                checkinDate,
						                checkoutDate,
						                request.getGuests(),
						                BookingStatus.BOOKED.getValue(),
						                price.getSubtotal(),
						                price.getDiscount(),
						                price.getTotalAmount(),
						                request.getNote(),
						                request.getRequestId());
        
        aDays.forEach(a -> a.setStatus(AvailabilityStatus.BOOKED.getValue()));
        
        availabilityService.saveAll(aDays);
        bookingRepository.save(booking);
        return mapper.toResponse(booking);
	}
	
	private void validateRequest(final BookingRequest request) {
		final LocalDate checkinDate = request.getCheckInDate();
		final LocalDate checkoutDate = request.getCheckOutDate();
		final LocalDate currentDate = LocalDate.now();
		
		if(checkinDate.isBefore(currentDate) || checkinDate.isAfter(checkoutDate)) {
			throw new BusinessException("Invalid date");
		}
		
		if(request.getGuests() <= 0) {
			throw new BusinessException("Invalid guest number");
		}
	}
	

}
