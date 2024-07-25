package com.ntdquan.airbnb_backend.user.Controller;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ntdquan.airbnb_backend.user.auth.AuthService;
import com.ntdquan.airbnb_backend.user.auth.JwtService;
import com.ntdquan.airbnb_backend.user.auth.DTO.AuthenticationResponse;
import com.ntdquan.airbnb_backend.user.auth.DTO.RefreshTokenRequest;
import com.ntdquan.airbnb_backend.user.model.JwtResponse;
import com.ntdquan.airbnb_backend.user.model.User;

import io.jsonwebtoken.ExpiredJwtException;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/auth")
public class AuthController {
	private final AuthService authService;
	private final JwtService jwtService;
	
	public AuthController(AuthService authService, JwtService jwtService) {
		super();
		this.authService = authService;
		this.jwtService = jwtService;
	}
	
	@PostMapping("/login")
	public ResponseEntity<JwtResponse> login(@RequestBody User request) {
		return ResponseEntity.ok(authService.authenticate(request));
	}
	
	@PostMapping("/register")
	public ResponseEntity<AuthenticationResponse> register(@RequestBody User request) {
		return ResponseEntity.ok(authService.register(request));
	}
	
	@PostMapping("/refreshToken")
	public ResponseEntity<JwtResponse> responseToken(@RequestBody RefreshTokenRequest refreshTokenRequest) {
		return ResponseEntity.ok(authService.refreshToken(refreshTokenRequest));
	}
	
	@PostMapping("/logout")
	public ResponseEntity<Void> logout(@RequestHeader("Authoriztion") String token) {
		if(token.startsWith("Bear ")) {
			token = token.substring(7);
		}
		String email = null;
		try {
			email = jwtService.extractUsername(token);
		} catch (ExpiredJwtException e) {
			email = e.getClaims().getSubject();
		}
		authService.logoutUser(email);
		return ResponseEntity.ok().build();
	}
}
