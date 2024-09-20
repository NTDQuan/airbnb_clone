package com.ntdquan.airbnb_backend.Booking.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.stereotype.Service;

import com.ntdquan.airbnb_backend.Booking.model.HomestayAvailability;
import com.ntdquan.airbnb_backend.Booking.repository.HomestayAvailabilityRepository;
import com.ntdquan.airbnb_backend.constant.AvailabilityStatus;
import com.ntdquan.airbnb_backend.exception.BusinessException;
import com.ntdquan.airbnb_backend.utils.DateUtil;

@Service
public class AvailabilityService {
	private static final int NIGHT_MAX = 365;
	
	private final HomestayAvailabilityRepository availabilityRepository;

	public AvailabilityService(HomestayAvailabilityRepository availabilityRepository) {
		super();
		this.availabilityRepository = availabilityRepository;
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
				AvailabilityStatus.AVAILABLE.getValue(), 
				checkinDate, 
				checkoutDate);
		if (aDays.isEmpty() || aDays.size() < nights) {
			throw new BusinessException("Homestay busy");
		}
		
		return aDays;
	}
}
