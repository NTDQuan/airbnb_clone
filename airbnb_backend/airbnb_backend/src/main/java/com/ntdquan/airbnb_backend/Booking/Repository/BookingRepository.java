package com.ntdquan.airbnb_backend.Booking.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.ntdquan.airbnb_backend.Booking.model.Booking;

import java.util.List;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Long> {
    @Query("SELECT booking FROM Booking booking WHERE booking.homestay.id = :homestayId AND booking.user.id = :userId AND booking.bookingStatus = :status")
    List<Booking> checkBooked(@Param("homestayId") Long homestayId, @Param("userId") Long userId, @Param("status") Integer status);

    List<Booking> findBookingByUserId(Long UserId);

    @Query("SELECT booking FROM Booking booking WHERE booking.homestay.id IN :homestayIds")
    List<Booking> findBookingByHomestayId(List<Long> homestayIds);
}
