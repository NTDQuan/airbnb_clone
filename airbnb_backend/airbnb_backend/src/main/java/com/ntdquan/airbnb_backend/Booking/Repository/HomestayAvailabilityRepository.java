package com.ntdquan.airbnb_backend.Booking.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Lock;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ntdquan.airbnb_backend.Booking.model.HomestayAvailability;
import com.ntdquan.airbnb_backend.Booking.model.HomestayAvailabilityId;

import jakarta.persistence.LockModeType;

public interface HomestayAvailabilityRepository extends JpaRepository<HomestayAvailability, HomestayAvailabilityId> {
	@Query(value = """
			SELECT new HomestayAvailability(ha.homestayId, ha.date, ha.price, ha.availabilityStatus)
			FROM HomestayAvailability ha
			WHERE ha.homestayId = :homestayId
			AND ha.availabilityStatus = :status
			AND ha.date BETWEEN :checkinDate AND :checkoutDate
			""")
	@Lock(LockModeType.PESSIMISTIC_WRITE)
	List<HomestayAvailability> findAndLockHomestayAvailability(@Param("homestayId") Long homestayId,
															   @Param("status") Integer status,
															   @Param("checkinDate") LocalDate checkinDate,
															   @Param("checkoutDate") LocalDate checkoutDate);
}
