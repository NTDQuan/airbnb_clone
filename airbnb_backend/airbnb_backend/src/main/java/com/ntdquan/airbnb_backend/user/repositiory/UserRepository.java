package com.ntdquan.airbnb_backend.user.repositiory;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ntdquan.airbnb_backend.user.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
	Optional<User> findByEmail(String email);
}
