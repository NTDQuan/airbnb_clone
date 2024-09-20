package com.ntdquan.airbnb_backend.Booking.model;

import jakarta.persistence.Column;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.MapsId;

@Entity
public class BookingGuests {
	@EmbeddedId
	private BookingGuestsId id;
	
	@ManyToOne
	@MapsId("bookingId")
	@JoinColumn(name = "booking_id")
	private Booking booking;
	
	@ManyToOne
	@MapsId("guestTypeId")
	@JoinColumn(name = "guest_type_id")
	private GuestType guestType;
	
	@Column(name = "num_guests", nullable = false)
	private int numGuests;

	public BookingGuests(BookingGuestsId id, Booking booking, GuestType guestType, int numGuests) {
		super();
		this.id = id;
		this.booking = booking;
		this.guestType = guestType;
		this.numGuests = numGuests;
	}

	public BookingGuestsId getId() {
		return id;
	}

	public void setId(BookingGuestsId id) {
		this.id = id;
	}

	public Booking getBooking() {
		return booking;
	}

	public void setBooking(Booking booking) {
		this.booking = booking;
	}

	public GuestType getGuestType() {
		return guestType;
	}

	public void setGuestType(GuestType guestType) {
		this.guestType = guestType;
	}

	public int getNumGuests() {
		return numGuests;
	}

	public void setNumGuests(int numGuests) {
		this.numGuests = numGuests;
	}
	
	
}
