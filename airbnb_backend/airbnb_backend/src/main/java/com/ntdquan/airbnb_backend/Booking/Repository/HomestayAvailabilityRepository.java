package com.ntdquan.airbnb_backend.Booking.Repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ntdquan.airbnb_backend.Booking.Model.HomestayAvailability;
import com.ntdquan.airbnb_backend.Booking.Model.HomestayAvailabilityId;

public interface HomestayAvailabilityRepository extends JpaRepository<HomestayAvailability, HomestayAvailabilityId> {
	@Query(value = """
			SElECT new HomestayAvailability(ha.homestayId, ha.date, ha.status)
			FROM HomestayAvailability ha
			WHERE ha.homestayId = :homestayId
			AND ha.status = :status
			AND ha.date BETWEEN :checkinDate AND :checkoutDate
			""")
	List<HomestayAvailability> findAndLockHomestayAvailability(@Param("homestayId") Long homestayId,
															   @Param("status") Integer status,
															   @Param("checkinDate") LocalDate checkinDate,
															   @Param("checkoutDate") LocalDate checkoutDate);
}
