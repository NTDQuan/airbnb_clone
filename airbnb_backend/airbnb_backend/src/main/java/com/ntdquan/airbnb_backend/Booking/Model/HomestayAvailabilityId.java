package com.ntdquan.airbnb_backend.Booking.model;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

@Embeddable
public class HomestayAvailabilityId {
	@Column(name = "homestay_id")
	private Long homestayId;
	
	@Column(name = "date")
	private LocalDate date;
	public HomestayAvailabilityId(Long homestayId, LocalDate date) {
		super();
		this.homestayId = homestayId;
		this.date = date;
	}
	
	public HomestayAvailabilityId() {
		super();
	}

	public Long getHomestayId() {
		return homestayId;
	}
	public void setHomestayId(Long homestayId) {
		this.homestayId = homestayId;
	}
	public LocalDate getDate() {
		return date;
	}
	public void setDate(LocalDate date) {
		this.date = date;
	}
	
	
}
