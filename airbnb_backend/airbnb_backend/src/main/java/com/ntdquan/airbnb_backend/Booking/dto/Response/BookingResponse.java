package com.ntdquan.airbnb_backend.Booking.dto.Response;

import java.math.BigDecimal;

public class BookingResponse {
	private Long bookingId;
	private Long userId;
	private Long homestayId;
	private String checkinDate;
	private String checkoutDate;
	private Integer adaultGuests;
	private Integer childGuests;
	private Integer status;
	private BigDecimal nightlyPrice;
	private BigDecimal serviceFee;
	private BigDecimal totalPrice;
	
	public BookingResponse() {
		super();
	}

	public BookingResponse(Long bookingId, Long userId, Long homestayId, String checkinDate, String checkoutDate,
			Integer adaultGuests, Integer childGuests, Integer status, BigDecimal nightlyPrice, BigDecimal serviceFee,
			BigDecimal totalPrice) {
		super();
		this.bookingId = bookingId;
		this.userId = userId;
		this.homestayId = homestayId;
		this.checkinDate = checkinDate;
		this.checkoutDate = checkoutDate;
		this.adaultGuests = adaultGuests;
		this.childGuests = childGuests;
		this.status = status;
		this.nightlyPrice = nightlyPrice;
		this.serviceFee = serviceFee;
		this.totalPrice = totalPrice;
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

	public Integer getAdaultGuests() {
		return adaultGuests;
	}

	public void setAdaultGuests(Integer adaultGuests) {
		this.adaultGuests = adaultGuests;
	}

	public Integer getChildGuests() {
		return childGuests;
	}

	public void setChildGuests(Integer childGuests) {
		this.childGuests = childGuests;
	}

	public Integer getStatus() {
		return status;
	}

	public void setStatus(Integer status) {
		this.status = status;
	}

	public BigDecimal getNightlyPrice() {
		return nightlyPrice;
	}

	public void setNightlyPrice(BigDecimal nightlyPrice) {
		this.nightlyPrice = nightlyPrice;
	}

	public BigDecimal getServiceFee() {
		return serviceFee;
	}

	public void setServiceFee(BigDecimal serviceFee) {
		this.serviceFee = serviceFee;
	}

	public BigDecimal getTotalPrice() {
		return totalPrice;
	}

	public void setTotalPrice(BigDecimal totalPrice) {
		this.totalPrice = totalPrice;
	}
}
