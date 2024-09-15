package com.ntdquan.airbnb_backend.Homestay.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ntdquan.airbnb_backend.Homestay.DTO.HomestayCardDTO;
import com.ntdquan.airbnb_backend.Homestay.Model.Homestay;
import com.ntdquan.airbnb_backend.user.model.User;

@Repository
public interface HomestayRepository extends JpaRepository<Homestay, Long> {
	List<Homestay> findByHostID(User hostID);
	Optional<Homestay> findById(Long id);
	User getUserById(Long id);
}
