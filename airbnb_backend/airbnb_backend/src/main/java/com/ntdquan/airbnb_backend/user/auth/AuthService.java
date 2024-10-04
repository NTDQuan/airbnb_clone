package com.ntdquan.airbnb_backend.user.auth;

import java.util.HashMap;
import java.util.Map;

import com.ntdquan.airbnb_backend.user.DTO.UserDTO;
import com.ntdquan.airbnb_backend.user.auth.DTO.LoginRequest;
import com.ntdquan.airbnb_backend.user.mapper.UserToUserDTOConverter;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import com.ntdquan.airbnb_backend.user.model.User;

@Service
public class AuthService {
	private final JwtProvider jwtProvider;

	private final UserToUserDTOConverter userToUserDTOConverter;

	public AuthService(JwtProvider jwtProvider, UserToUserDTOConverter userToUserDTOConverter) {
		this.jwtProvider = jwtProvider;
		this.userToUserDTOConverter = userToUserDTOConverter;
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
}
