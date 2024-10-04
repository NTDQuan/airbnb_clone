package com.ntdquan.airbnb_backend.Booking.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import com.ntdquan.airbnb_backend.Booking.model.HomestayAvailability;
import com.ntdquan.airbnb_backend.Booking.model.HomestayAvailabilityId;
import com.ntdquan.airbnb_backend.Booking.repository.HomestayAvailabilityRepository;
import com.ntdquan.airbnb_backend.Homestay.Model.Homestay;
import com.ntdquan.airbnb_backend.Homestay.Repository.HomestayRepository;
import com.ntdquan.airbnb_backend.constant.AvailabilityStatusEnum;
import com.ntdquan.airbnb_backend.constant.HomestayStatusEnum;
import com.ntdquan.airbnb_backend.system.exception.BusinessException;
import com.ntdquan.airbnb_backend.system.exception.ObjectNotFoundException;
import com.ntdquan.airbnb_backend.utils.DateUtil;

import jakarta.transaction.Transactional;

@Service
public class AvailabilityService {
	private static final int NIGHT_MAX = 365;
	
	private final HomestayAvailabilityRepository availabilityRepository;
	private final HomestayRepository homestayRepository;

	public AvailabilityService(HomestayAvailabilityRepository availabilityRepository, HomestayRepository homestayRepository) {
		super();
		this.availabilityRepository = availabilityRepository;
		this.homestayRepository = homestayRepository;
	}
	
	public List<HomestayAvailability> checkAvailabilityForBooking(final Long homestayId,
																  final LocalDate checkinDate,
																  final LocalDate checkoutDate) {
		final int nights = (int) DateUtil.getDiffInDays(checkinDate, checkoutDate);
		if (nights > NIGHT_MAX) {
			throw new BusinessException("Night invalid");
		}
		
		final List<HomestayAvailability> aDays = availabilityRepository.findAndLockHomestayAvailability(
				homestayId, 
				AvailabilityStatusEnum.AVAILABLE.getValue(), 
				checkinDate, 
				checkoutDate);
		if (aDays.isEmpty() || aDays.size() < nights) {
			throw new BusinessException("Homestay busy");
		}
		
		return aDays;
	}
	
    @Transactional
    public void saveAll(List<HomestayAvailability> aDays) {
        availabilityRepository.saveAll(aDays);
    }
	
	@Transactional
	public void addAvailableDays(final int nights) {
		if (nights > NIGHT_MAX) {
			throw new BusinessException("Cannot add more than \" + NIGHT_MAX + \" nights.");
		}
		
		List<Homestay> activeHomestays = homestayRepository.findByStatus(HomestayStatusEnum.ACTIVE);
		
		for (Homestay homestay : activeHomestays) {
			Long homestayId = homestay.getId();
			LocalDate startDate = LocalDate.now();
			LocalDate endDate = startDate.plusDays(nights);
			
			for (LocalDate date = startDate; !date.isAfter(endDate); date = date.plusDays(1)) {
				HomestayAvailability availability = new HomestayAvailability(
						new HomestayAvailabilityId(homestayId, date),
						homestay,
						date,
						homestay.getDefaultPrice(),
						AvailabilityStatusEnum.AVAILABLE.getValue()
						);
				availabilityRepository.save(availability);
			}
		}
	}
	
	@Transactional
	public void addAvailableDaysToSingleHomestay(final int nights, final Long homestayId) {
		if (nights > NIGHT_MAX) {
			throw new BusinessException("Cannot add more than \" + NIGHT_MAX + \" nights.");
		}
		
		LocalDate startDate = LocalDate.now();
		LocalDate endDate = startDate.plusDays(nights);
		Homestay homestay = homestayRepository.findById(homestayId)
		        .orElseThrow(() -> new ObjectNotFoundException("homestay", homestayId));
		
		for (LocalDate date = startDate; !date.isAfter(endDate); date = date.plusDays(1)) {
			HomestayAvailability availability = new HomestayAvailability(
					new HomestayAvailabilityId(homestayId, date),
					homestay,
					date,
					homestay.getDefaultPrice(),
					AvailabilityStatusEnum.AVAILABLE.getValue()
					);
			availabilityRepository.save(availability);
		}
	}
	
	@Transactional
	public void deletePastAvailabiliyDay() {
		LocalDate today = LocalDate.now();
		
		List<HomestayAvailability> pastAvailability = availabilityRepository.findDateBeforeToday(today);
		if(!pastAvailability.isEmpty()) {
			availabilityRepository.deleteAll(pastAvailability);
		}
	}
	
	@Scheduled(cron = "0 0 1 * * *")
	@Transactional
	public void scheduleRun() {
		addAvailableDays(NIGHT_MAX);
		deletePastAvailabiliyDay();
	}
}
