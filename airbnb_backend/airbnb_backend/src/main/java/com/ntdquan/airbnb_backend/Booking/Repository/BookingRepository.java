package com.ntdquan.airbnb_backend.Booking.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ntdquan.airbnb_backend.Booking.model.Booking;

@Repository
public interface BookingRepository extends JpaRepository<Booking,  Long> {

}
