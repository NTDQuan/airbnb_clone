package com.ntdquan.airbnb_backend.user.Service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import com.ntdquan.airbnb_backend.user.model.User;
import com.ntdquan.airbnb_backend.user.repositiory.UserRepository;

@Component
public class UserService implements UserDetailsService {
	@Autowired
	private UserRepository repository;
	
	@Override
	public User loadUserByUsername(String email) throws UsernameNotFoundException {
		Optional<User> user = repository.findByEmail(email);
		return user.orElseThrow(() -> new UsernameNotFoundException("user not found " + email));
	}
}
