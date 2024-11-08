package com.ntdquan.airbnb_backend.Booking.repository;

import java.time.LocalDate;
import java.util.List;

import com.ntdquan.airbnb_backend.Homestay.Model.Homestay;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Lock;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ntdquan.airbnb_backend.Booking.model.HomestayAvailability;
import com.ntdquan.airbnb_backend.Booking.model.HomestayAvailabilityId;

import jakarta.persistence.LockModeType;

public interface HomestayAvailabilityRepository extends JpaRepository<HomestayAvailability, HomestayAvailabilityId> {
	@Query(value = """
    SELECT ha
    FROM HomestayAvailability ha
    WHERE ha.homestay = :homestay
    AND ha.availabilityStatus = :status
    AND ha.date BETWEEN :checkinDate AND :checkoutDate
    """)
	@Lock(LockModeType.PESSIMISTIC_WRITE)
	List<HomestayAvailability> findAndLockHomestayAvailability(@Param("homestay") Homestay homestay,
															   @Param("status") Integer status,
															   @Param("checkinDate") LocalDate checkinDate,
															   @Param("checkoutDate") LocalDate checkoutDate);
	
	@Query("SELECT ha FROM HomestayAvailability ha WHERE ha.date < :today")
	List<HomestayAvailability> findDateBeforeToday(LocalDate today);
}
