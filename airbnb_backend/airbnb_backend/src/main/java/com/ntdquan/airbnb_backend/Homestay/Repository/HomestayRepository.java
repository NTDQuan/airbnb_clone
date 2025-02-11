package com.ntdquan.airbnb_backend.Homestay.Repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.ntdquan.airbnb_backend.Homestay.Model.Homestay;
import com.ntdquan.airbnb_backend.constant.HomestayStatusEnum;
import com.ntdquan.airbnb_backend.user.model.User;

@Repository
public interface HomestayRepository extends JpaRepository<Homestay, Long> {
	@Query("SELECT h FROM Homestay h WHERE h.hostID.id = :hostID")
	List<Homestay> findByHostID(@Param("hostID") Long hostID);

	Optional<Homestay> findById(Long id);
	User getUserById(Long id);
	List<Homestay> findByStatus(HomestayStatusEnum status);

	@Query("""
    SELECT h FROM Homestay h
    WHERE (:category IS NULL OR h.type = :category)
    AND (:locationValue IS NULL OR h.country = :locationValue)
    AND (:guestCount IS NULL OR h.maxGuests >= :guestCount)
    AND (:startDate IS NULL OR :endDate IS NULL OR NOT EXISTS (
        SELECT b FROM Booking b WHERE b.homestay = h
        AND b.checkinDate <= :endDate AND b.checkoutDate >= :startDate
    ))
    """)
	List<Homestay> searchHomestayByFilter(
			@Param("category") String category,
			@Param("locationValue") String locationValue,
			@Param("guestCount") Integer guestCount,
			@Param("startDate") LocalDate startDate,
			@Param("endDate") LocalDate endDate
	);
}
