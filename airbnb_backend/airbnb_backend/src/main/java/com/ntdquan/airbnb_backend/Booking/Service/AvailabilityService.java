package com.ntdquan.airbnb_backend.Booking.Service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.stereotype.Service;

import com.ntdquan.airbnb_backend.Booking.Model.HomestayAvailability;
import com.ntdquan.airbnb_backend.Booking.Repository.HomestayAvailabilityRepository;
import com.ntdquan.airbnb_backend.constant.AvailabilityStatus;
import com.ntdquan.airbnb_backend.exception.BusinessException;
import com.ntdquan.airbnb_backend.utils.DateUtil;

import jakarta.transaction.Transactional;

@Service
public class AvailabilityService {
	private static final int MAX_NIGHT = 365;
	
	private final HomestayAvailabilityRepository availabilityRepository;

	public AvailabilityService(HomestayAvailabilityRepository availabilityRepository) {
		super();
		this.availabilityRepository = availabilityRepository;
	}
	
	public List<HomestayAvailability> checkAvailabilityForBooking(
			final Long homestayId, 
			final LocalDate checkinDate, 
			final LocalDate checkoutDate) {
		final int nights = (int) DateUtil.getDiffInDays(checkinDate, checkoutDate);
		if(nights > MAX_NIGHT) {
			throw new BusinessException("Invalid night");
		}
		
		final var aDays = availabilityRepository.findAndLockHomestayAvailability(
				homestayId, 
				AvailabilityStatus.AVAILABLE.getValue(), 
				checkinDate, 
				checkoutDate.minusDays(1)
		);
		if(aDays.isEmpty() || aDays.size() < nights) {
			throw new BusinessException("Homestay busy");
		}
		
		return aDays;
			 
	}
	
	@Transactional
	public void saveAll(List<HomestayAvailability> aDays) {
		availabilityRepository.saveAll(aDays);
	}
												
}
