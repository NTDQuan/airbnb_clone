package com.ntdquan.airbnb_backend.Booking.dto.Response;

import java.math.BigDecimal;

public class BookingPrice {
	private BigDecimal nightlyPrice;
	private BigDecimal discount;
	private BigDecimal totalPrice;
	
	public BookingPrice() {
		super();
	}

	public BookingPrice(BigDecimal nightlyPrice, BigDecimal discount, BigDecimal totalPrice) {
		super();
		this.nightlyPrice = nightlyPrice;
		this.discount = discount;
		this.totalPrice = totalPrice;
	}

	public BigDecimal getNightlyPrice() {
		return nightlyPrice;
	}

	public void setNightlyPrice(BigDecimal nightlyPrice) {
		this.nightlyPrice = nightlyPrice;
	}

	public BigDecimal getDiscount() {
		return discount;
	}

	public void setDiscount(BigDecimal discount) {
		this.discount = discount;
	}

	public BigDecimal getTotalPrice() {
		return totalPrice;
	}

	public void setTotalPrice(BigDecimal totalPrice) {
		this.totalPrice = totalPrice;
	}
	
	
}
