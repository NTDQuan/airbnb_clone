package com.ntdquan.airbnb_backend.user.Controller;

import com.ntdquan.airbnb_backend.user.auth.DTO.RegisterRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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

import com.ntdquan.airbnb_backend.system.Result;
import com.ntdquan.airbnb_backend.system.StatusCode;
import com.ntdquan.airbnb_backend.user.Service.UserService;
import com.ntdquan.airbnb_backend.user.auth.AuthService;
import com.ntdquan.airbnb_backend.user.auth.JwtService;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
@RequestMapping("/api/auth")
public class AuthController {
	private static final Logger log = LoggerFactory.getLogger(AuthController.class);
	
	private final AuthService authService;
	
	public AuthController(AuthService authService) {
		super();
		this.authService = authService;
	}
	
	@PostMapping("/login")
	public Result getLoginInfo(Authentication authentication) {
		log.debug("Authenticated user: '{}'", authentication.getName());
		return new Result(true, StatusCode.SUCCESS, "User Info and JSON Web Token", this.authService.createLoginInfo(authentication));
	}

	@PostMapping("/register")
	public Result register(@RequestBody RegisterRequest registerRequest) {
		log.debug("Register user with email: '{}'", registerRequest.getEmail());
		this.authService.register(registerRequest);
		return new Result(true, StatusCode.SUCCESS, "User successfully registered");
	}

}
