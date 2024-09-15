package com.ntdquan.airbnb_backend.Booking.DTO;

import java.time.LocalDate;

public class BookingRequest {
	private String requestId;
	private Long userId;
	private Long homestayId;
	private LocalDate checkInDate;
	private LocalDate checkOutDate;
	private Integer guests;
	private String note;	
	
	public BookingRequest() {
		super();
	}

	public BookingRequest(String requestId, Long userId, Long homestayId, LocalDate checkInDate, LocalDate checkOutDate,
			Integer guests, String note) {
		super();
		this.requestId = requestId;
		this.userId = userId;
		this.homestayId = homestayId;
		this.checkInDate = checkInDate;
		this.checkOutDate = checkOutDate;
		this.guests = guests;
		this.note = note;
	}

	public String getRequestId() {
		return requestId;
	}

	public void setRequestId(String requestId) {
		this.requestId = requestId;
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

	public LocalDate getCheckInDate() {
		return checkInDate;
	}

	public void setCheckInDate(LocalDate checkInDate) {
		this.checkInDate = checkInDate;
	}

	public LocalDate getCheckOutDate() {
		return checkOutDate;
	}

	public void setCheckOutDate(LocalDate checkOutDate) {
		this.checkOutDate = checkOutDate;
	}

	public Integer getGuests() {
		return guests;
	}

	public void setGuests(Integer guests) {
		this.guests = guests;
	}

	public String getNote() {
		return note;
	}

	public void setNote(String note) {
		this.note = note;
	}
	
}
