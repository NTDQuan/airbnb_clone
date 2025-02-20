package com.ntdquan.airbnb_backend.Booking.service;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.stereotype.Service;

import com.ntdquan.airbnb_backend.Booking.dto.Response.BookingPrice;
import com.ntdquan.airbnb_backend.Booking.model.HomestayAvailability;

@Service
public class PricingService {
	private static final BigDecimal SERVICE_FEE_PERCENTAGE = new BigDecimal("0.15");
	
	public BookingPrice calculate(final List<HomestayAvailability> aDays) {
		final var nights = aDays.size();
		BigDecimal nightlyPrice = BigDecimal.ZERO;
		
		for (HomestayAvailability aDay : aDays) {
			nightlyPrice = nightlyPrice.add(aDay.getPrice());
		}
		
		BigDecimal serviceFee = nightlyPrice.multiply(SERVICE_FEE_PERCENTAGE);
		
		return new BookingPrice(
				nightlyPrice,
				BigDecimal.ZERO,
				serviceFee,
				nightlyPrice.add(serviceFee));
	}
}
