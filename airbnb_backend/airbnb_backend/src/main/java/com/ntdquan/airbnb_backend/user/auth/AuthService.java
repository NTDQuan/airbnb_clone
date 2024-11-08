package com.ntdquan.airbnb_backend.user.auth;

import java.util.HashMap;
import java.util.Map;

import com.ntdquan.airbnb_backend.user.DTO.UserDTO;
import com.ntdquan.airbnb_backend.user.Service.UserService;
import com.ntdquan.airbnb_backend.user.auth.DTO.LoginRequest;
import com.ntdquan.airbnb_backend.user.auth.DTO.RegisterRequest;
import com.ntdquan.airbnb_backend.user.mapper.UserToUserDTOConverter;
import com.ntdquan.airbnb_backend.user.repositiory.UserRepository;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import com.ntdquan.airbnb_backend.user.model.User;

@Service
public class AuthService {
	private final JwtProvider jwtProvider;

	private final UserToUserDTOConverter userToUserDTOConverter;
	private final UserRepository userRepository;
	private final UserService userService;

	public AuthService(JwtProvider jwtProvider, UserToUserDTOConverter userToUserDTOConverter, UserRepository userRepository, UserService userService) {
		this.jwtProvider = jwtProvider;
		this.userToUserDTOConverter = userToUserDTOConverter;
		this.userRepository = userRepository;
		this.userService = userService;
	}

	public Map<String, Object> createLoginInfo(Authentication authentication) {
		MyUserPrincipal principal = (MyUserPrincipal)authentication.getPrincipal();
		User user = principal.getUser();
		UserDTO userDTO = this.userToUserDTOConverter.convert(user);
		String token = this.jwtProvider.createToken(authentication);

		Map<String, Object> loginResultMap = new HashMap<String, Object>();

		loginResultMap.put("userInfo", userDTO);
		loginResultMap.put("token", token);

		return loginResultMap;
	}

	public void register(RegisterRequest registerRequest) {
		if (userRepository.existsByEmail(registerRequest.getEmail())) {
			throw new RuntimeException("Email already exists");
		}

		User user = new User();
		user.setEmail(registerRequest.getEmail());
		user.setPassword(registerRequest.getPassword());
		user.setName(registerRequest.getFullName());
		userService.save(user);
	}
}
