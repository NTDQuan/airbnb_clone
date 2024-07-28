package com.ntdquan.airbnb_backend.user.Controller;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ntdquan.airbnb_backend.user.Service.UserService;
import com.ntdquan.airbnb_backend.user.auth.AuthService;
import com.ntdquan.airbnb_backend.user.auth.JwtService;
import com.ntdquan.airbnb_backend.user.auth.DTO.AuthenticationResponse;
import com.ntdquan.airbnb_backend.user.auth.DTO.RefreshTokenRequest;
import com.ntdquan.airbnb_backend.user.model.JwtResponse;
import com.ntdquan.airbnb_backend.user.model.User;

import io.jsonwebtoken.ExpiredJwtException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
@RequestMapping("/api/auth")
public class AuthController {
	private final AuthService authService;
	private final JwtService jwtService;
	private final UserService userService;
	public static final long JWT_TOKEN_VALIDITY = 5 * 60 * 60 * 1000;
	
	public AuthController(AuthService authService, JwtService jwtService, UserService userService) {
		super();
		this.authService = authService;
		this.jwtService = jwtService;
		this.userService = userService;
	}
	
	@PostMapping("/login")
	public ResponseEntity<JwtResponse> login(@RequestBody User request, HttpServletResponse response) {
		JwtResponse jwtResponse = authService.authenticate(request);
		Cookie accessTokenCookie = new Cookie("accessToken", jwtResponse.getAccessToken());
		//accessTokenCookie.setHttpOnly(true);
		accessTokenCookie.setSecure(true);
		accessTokenCookie.setPath("/");
		accessTokenCookie.setMaxAge((int) JWT_TOKEN_VALIDITY / 1000);
		//accessTokenCookie.setAttribute("SameSite", "None");
		
		Cookie refreshTokenCookie = new Cookie("refreshToken", jwtResponse.getToken());
		//refreshTokenCookie.setHttpOnly(true);
		refreshTokenCookie.setSecure(true);
		refreshTokenCookie.setPath("/");
		refreshTokenCookie.setMaxAge((int) 600000 / 1000);
		//refreshTokenCookie.setAttribute("SameSite", "None");
		
		response.addCookie(accessTokenCookie);
		response.addCookie(refreshTokenCookie);
		return ResponseEntity.ok(jwtResponse);
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
	
	@GetMapping("/auto-login")
	public ResponseEntity<?> autoLogin(HttpServletRequest request, HttpServletResponse response) {
		Cookie[] cookies = request.getCookies();
		String accessToken = null;
		String refreshToken = null;
		
		if(cookies != null) {
			for (Cookie cookie : cookies) {
				if (cookie.getName().equals("accessToken")) {
					accessToken = cookie.getValue();
				} else if (cookie.getName().equals("refreshToken")) {
					refreshToken = cookie.getValue();
				}
			}
		}
		
		if (accessToken == null || refreshToken == null) {
			return ResponseEntity.status(401).body("Unauthorized");
		}
		
		try {
			if (jwtService.validateToken(accessToken)) {
				String email = jwtService.extractUsername(accessToken);
				User user = userService.loadUserByUsername(email);
				return ResponseEntity.ok(user);
			}
		} catch (ExpiredJwtException e) {
			try {
				JwtResponse jwtResponse = authService.refreshToken(new RefreshTokenRequest(refreshToken));
				Cookie newAccessTokenCookie = new Cookie("accessToken", jwtResponse.getAccessToken());
                newAccessTokenCookie.setSecure(true);
                newAccessTokenCookie.setPath("/");
                newAccessTokenCookie.setMaxAge((int) JWT_TOKEN_VALIDITY / 1000);
                response.addCookie(newAccessTokenCookie);
                
                String username = jwtService.extractUsername(jwtResponse.getAccessToken());
                User user = userService.loadUserByUsername(username);
                return ResponseEntity.ok(user);
			} catch (Exception ex) {
				return ResponseEntity.status(401).body("Authorized");
			}
		}
		return ResponseEntity.status(401).body("Unauthorized");
	}
}
