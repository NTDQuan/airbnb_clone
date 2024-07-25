package com.ntdquan.airbnb_backend.user.auth;

import java.time.Instant;
import java.util.Optional;
import java.util.UUID;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ntdquan.airbnb_backend.user.Controller.UserController;
import com.ntdquan.airbnb_backend.user.model.RefreshToken;
import com.ntdquan.airbnb_backend.user.model.User;
import com.ntdquan.airbnb_backend.user.repositiory.RefreshTokenRepository;
import com.ntdquan.airbnb_backend.user.repositiory.UserRepository;

import jakarta.transaction.Transactional;

@Service
public class RefreshTokenService {
	@Autowired
	private RefreshTokenRepository refreshTokenRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	private static final Logger logger = LoggerFactory.getLogger(UserController.class);
	
	@Transactional
	public RefreshToken createRefreshToken(String email) {
		User user = userRepository.findByEmail(email).orElseThrow(() -> new RuntimeException("User not found"));
		
		Optional<RefreshToken> existingToken = refreshTokenRepository.findByUserId(user.getId());
		if (existingToken.isPresent()) {
			logger.info("Found existing token: {}", existingToken);
			return existingToken.get();
		}
		
		RefreshToken refreshToken = new RefreshToken();
		refreshToken.setUser(userRepository.findByEmail(email).get());
		refreshToken.setToken(UUID.randomUUID().toString());
		logger.info("Create new token: {}", refreshToken.getToken());
		refreshToken.setExpiryDate(Instant.now().plusMillis(600000));
		return refreshTokenRepository.save(refreshToken);
	}
	
	public Optional<RefreshToken> findByToken(String token) {
		return refreshTokenRepository.findByToken(token);
	}
	
	@Transactional
	public RefreshToken verifyExpiration(RefreshToken token) {
		if (token.getExpiryDate().compareTo(Instant.now()) < 0) {
			refreshTokenRepository.delete(token);
			throw new RuntimeException(token.getToken() + " Refresh token was expired. Please make a new signin request");
		}
		return token;
	}
	
	@Transactional
    public void deleteByUserID(Long id) {
        refreshTokenRepository.deleteByUser_Id(id);
    }
}
