package com.ntdquan.airbnb_backend.Booking.Service;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.stereotype.Service;

import com.ntdquan.airbnb_backend.Booking.DTO.BookingPrice;
import com.ntdquan.airbnb_backend.Booking.Model.HomestayAvailability;

@Service
public class PricingService {
	private final DiscountService discountService;

	public PricingService(DiscountService discountService) {
		super();
		this.discountService = discountService;
	}
	
	public BookingPrice calculate(final List<HomestayAvailability> aDays) {
		final var nights = aDays.size();
		var subtotal = BigDecimal.ZERO;
		
		for (var aDay: aDays) {
			subtotal = subtotal.add(aDay.getPrice());
		}
		
		final var discount = discountService.getDiscountAmount(subtotal, nights);
		
		return new BookingPrice(subtotal, discount, subtotal.add(discount));
	}
}
