package com.ntdquan.airbnb_backend.Booking.model;

import java.util.Objects;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

@Embeddable
public class BookingGuestsId {
	@Column(name = "booking_id")
	private Long bookingId;
	
	@Column(name = "guest_type_id")
	private Long guestTypeId;

	public BookingGuestsId() {
		super();
	}

	public BookingGuestsId(Long bookingId, Long guestTypeId) {
		super();
		this.bookingId = bookingId;
		this.guestTypeId = guestTypeId;
	}

	public Long getBookingId() {
		return bookingId;
	}

	public void setBookingId(Long bookingId) {
		this.bookingId = bookingId;
	}

	public Long getGuestTypeId() {
		return guestTypeId;
	}

	public void setGuestTypeId(Long guestTypeId) {
		this.guestTypeId = guestTypeId;
	}

	@Override
	public int hashCode() {
		return Objects.hash(bookingId, guestTypeId);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		BookingGuestsId other = (BookingGuestsId) obj;
		return Objects.equals(bookingId, other.bookingId) && Objects.equals(guestTypeId, other.guestTypeId);
	}
	
	
}
