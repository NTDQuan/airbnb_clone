package com.ntdquan.airbnb_backend.user.auth;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.ntdquan.airbnb_backend.user.auth.DTO.AuthenticationResponse;
import com.ntdquan.airbnb_backend.user.auth.DTO.RefreshTokenRequest;
import com.ntdquan.airbnb_backend.user.model.JwtResponse;
import com.ntdquan.airbnb_backend.user.model.RefreshToken;
import com.ntdquan.airbnb_backend.user.model.User;
import com.ntdquan.airbnb_backend.user.repositiory.UserRepository;

@Service
public class AuthService {
	private final UserRepository userRepository;
	private final PasswordEncoder passwordEncoder;
	private final JwtService jwtService;
	private final AuthenticationManager authenticationManager;
	private final RefreshTokenService refreshTokenService;
	
	public AuthService(UserRepository userRepository, PasswordEncoder passwordEncoder, JwtService jwtService,
			AuthenticationManager authenticationManager, RefreshTokenService refreshTokenService) {
		super();
		this.userRepository = userRepository;
		this.passwordEncoder = passwordEncoder;
		this.jwtService = jwtService;
		this.authenticationManager = authenticationManager;
		this.refreshTokenService = refreshTokenService;
	}

	public JwtResponse authenticate(User request) {
		Authentication authentication = authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(
						request.getUsername(),
						request.getPassword()
					)
		);
		if(authentication.isAuthenticated()) {
			RefreshToken refreshToken = refreshTokenService.createRefreshToken(request.getUsername());
			JwtResponse response = new JwtResponse();
			response.setAccessToken(jwtService.generateToken(request.getUsername()));
			response.setToken(refreshToken.getToken());
			return response;
		} else {
			throw new UsernameNotFoundException("invalid user request !");
		}
	}
	
	public JwtResponse refreshToken(RefreshTokenRequest refreshTokenRequest) {
		return refreshTokenService.findByToken(refreshTokenRequest.getToken())
				.map(refreshTokenService::verifyExpiration)
				.map(RefreshToken::getUser)
				.map(user -> {
					String accessToken = jwtService.generateToken(user.getUsername());
					JwtResponse response = new JwtResponse();
					response.setAccessToken(accessToken);
					response.setToken(refreshTokenRequest.getToken());
					return response;
				}).orElseThrow(() -> new RuntimeException(
						"Refresh token is not in database!"));
	}
	
	
	public AuthenticationResponse register(User request) {
		User user = new User();
		user.setEmail(request.getUsername());
		user.setPassword(passwordEncoder.encode(request.getPassword()));
		user.setEmail(request.getUsername());
		user.setEmail(request.getUsername());
		
		user = userRepository.save(user);
		String token = jwtService.generateToken(user.getUsername());
		return new AuthenticationResponse(token);
	}
	
    public void logoutUser(String email) {
        userRepository.findByEmail(email).ifPresent(user -> refreshTokenService.deleteByUserID(user.getId()));
        
    }
}
