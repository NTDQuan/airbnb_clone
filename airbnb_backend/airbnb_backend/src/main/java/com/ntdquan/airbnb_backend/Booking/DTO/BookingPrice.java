package com.ntdquan.airbnb_backend.Booking.DTO;

import java.math.BigDecimal;

public class BookingPrice {
	private BigDecimal subtotal;
	private BigDecimal discount;
	private BigDecimal totalAmount;
	
	public BookingPrice() {
		super();
	}

	public BookingPrice(BigDecimal subtotal, BigDecimal discount, BigDecimal totalAmount) {
		super();
		this.subtotal = subtotal;
		this.discount = discount;
		this.totalAmount = totalAmount;
	}

	public BigDecimal getSubtotal() {
		return subtotal;
	}

	public void setSubtotal(BigDecimal subtotal) {
		this.subtotal = subtotal;
	}

	public BigDecimal getDiscount() {
		return discount;
	}

	public void setDiscount(BigDecimal discount) {
		this.discount = discount;
	}

	public BigDecimal getTotalAmount() {
		return totalAmount;
	}

	public void setTotalAmount(BigDecimal totalAmount) {
		this.totalAmount = totalAmount;
	}
	
	
}
