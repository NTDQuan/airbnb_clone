package com.ntdquan.airbnb_backend.Booking.DTO;

import java.math.BigDecimal;

public class BookingResponse {
	private Long bookingId;
	private Long userId;
	private Long homestayId;
	private String checkinDate;
	private String checkoutDate;
	private Integer guest;
	private Integer status;
	private BigDecimal subtotal;
	private BigDecimal discount;
	private BigDecimal totalAmount;
	private String requestId;
	private String note;
	
	public BookingResponse() {
		super();
	}

	public BookingResponse(Long bookingId, Long userId, Long homestayId, String checkinDate, String checkoutDate,
			Integer guest, Integer status, BigDecimal subtotal, BigDecimal discount, BigDecimal totalAmount,
			String requestId, String note) {
		super();
		this.bookingId = bookingId;
		this.userId = userId;
		this.homestayId = homestayId;
		this.checkinDate = checkinDate;
		this.checkoutDate = checkoutDate;
		this.guest = guest;
		this.status = status;
		this.subtotal = subtotal;
		this.discount = discount;
		this.totalAmount = totalAmount;
		this.requestId = requestId;
		this.note = note;
	}

	public Long getBookingId() {
		return bookingId;
	}

	public void setBookingId(Long bookingId) {
		this.bookingId = bookingId;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public Long getHomestayId() {
		return homestayId;
	}

	public void setHomestayId(Long homestayId) {
		this.homestayId = homestayId;
	}

	public String getCheckinDate() {
		return checkinDate;
	}

	public void setCheckinDate(String checkinDate) {
		this.checkinDate = checkinDate;
	}

	public String getCheckoutDate() {
		return checkoutDate;
	}

	public void setCheckoutDate(String checkoutDate) {
		this.checkoutDate = checkoutDate;
	}

	public Integer getGuest() {
		return guest;
	}

	public void setGuest(Integer guest) {
		this.guest = guest;
	}

	public Integer getStatus() {
		return status;
	}

	public void setStatus(Integer status) {
		this.status = status;
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

	public String getRequestId() {
		return requestId;
	}

	public void setRequestId(String requestId) {
		this.requestId = requestId;
	}

	public String getNote() {
		return note;
	}

	public void setNote(String note) {
		this.note = note;
	}
	
	
}
