package com.ntdquan.airbnb_backend.Booking.Service;

import java.math.BigDecimal;

import org.springframework.stereotype.Service;

@Service
public class DiscountService {
	private static final Integer LONG_STAY = 3;
	private static final BigDecimal LONG_STAY_DISCOUNT_RATE = BigDecimal.valueOf(-0.05);
	
	public BigDecimal getDiscountAmount(BigDecimal subtotal, int nights) {
		BigDecimal discount = BigDecimal.ZERO;
		
		if (nights >= LONG_STAY) {
			discount = subtotal.multiply(LONG_STAY_DISCOUNT_RATE);
		}
		
		return discount;
	}
}
