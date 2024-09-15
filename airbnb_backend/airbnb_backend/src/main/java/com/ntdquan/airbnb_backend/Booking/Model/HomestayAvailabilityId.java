package com.ntdquan.airbnb_backend.Booking.Model;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.Objects;

import jakarta.persistence.Entity;

public class HomestayAvailabilityId implements Serializable {
	private Long homestayId;
	private LocalDate date;
	
	public HomestayAvailabilityId() {
		super();
	}

	public HomestayAvailabilityId(Long homestayId, LocalDate date) {
		super();
		this.homestayId = homestayId;
		this.date = date;
	}

	@Override
	public int hashCode() {
		return Objects.hash(date, homestayId);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		HomestayAvailabilityId other = (HomestayAvailabilityId) obj;
		return Objects.equals(date, other.date) && Objects.equals(homestayId, other.homestayId);
	}
	
	
}
