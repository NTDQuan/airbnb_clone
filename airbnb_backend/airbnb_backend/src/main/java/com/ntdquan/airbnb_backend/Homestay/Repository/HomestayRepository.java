package com.ntdquan.airbnb_backend.Homestay.Repository;

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
	@Query("SELECT h FROM Homestay h WHERE h.hostID = :hostID")
	List<Homestay> findByHostID(@Param("hostID") Long hostID);

	Optional<Homestay> findById(Long id);
	User getUserById(Long id);
	List<Homestay> findByStatus(HomestayStatusEnum status);
}
