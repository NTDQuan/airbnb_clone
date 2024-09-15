package com.ntdquan.airbnb_backend.user.Service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.ntdquan.airbnb_backend.user.model.User;
import com.ntdquan.airbnb_backend.user.repositiory.UserRepository;

import jakarta.persistence.EntityNotFoundException;

@Component
@Service
public class UserService implements UserDetailsService {
	@Autowired
	private UserRepository repository;
	
	@Override
	public User loadUserByUsername(String email) throws UsernameNotFoundException {
		Optional<User> user = repository.findByEmail(email);
		return user.orElseThrow(() -> new UsernameNotFoundException("user not found " + email));
	}
	
    public User getUserById(Long id) {
        Optional<User> userOptional = repository.findById(id);
        if (userOptional.isPresent()) {
            return userOptional.get();
        } else {
            throw new EntityNotFoundException("User found with id: " + id);
        }
    }
}
