package com.ntdquan.airbnb_backend.user.Service;

import java.util.Optional;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.ntdquan.airbnb_backend.user.auth.MyUserPrincipal;
import com.ntdquan.airbnb_backend.user.model.User;
import com.ntdquan.airbnb_backend.user.repositiory.UserRepository;

import jakarta.persistence.EntityNotFoundException;

@Component
@Service
@Transactional
public class UserService implements UserDetailsService {
	@Autowired
	private UserRepository repository;

    @Autowired
    private PasswordEncoder passwordEncoder;
	
	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		return this.repository.findByEmail(email)
			.map(user -> new MyUserPrincipal(user))
			.orElseThrow(() -> new UsernameNotFoundException("username" + email + " is not found"));
		
	}

    public User save(User newUser) {
        newUser.setPassword(this.passwordEncoder.encode(newUser.getPassword()));
        return this.repository.save(newUser);
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
