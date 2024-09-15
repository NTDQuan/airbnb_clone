package com.ntdquan.airbnb_backend.Booking.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ntdquan.airbnb_backend.Booking.Model.Booking;

public interface BookingRepository extends JpaRepository<Booking, Long> {
}
