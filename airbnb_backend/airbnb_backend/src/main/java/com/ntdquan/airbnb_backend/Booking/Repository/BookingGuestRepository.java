package com.ntdquan.airbnb_backend.Booking.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ntdquan.airbnb_backend.Booking.model.BookingGuests;
import com.ntdquan.airbnb_backend.Booking.model.BookingGuestsId;

@Repository
public interface BookingGuestRepository extends JpaRepository<BookingGuests, BookingGuestsId> {
	List<BookingGuests> findByBookingId(Long bookingId);
}
