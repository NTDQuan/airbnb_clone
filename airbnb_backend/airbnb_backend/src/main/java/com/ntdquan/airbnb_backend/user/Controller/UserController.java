package com.ntdquan.airbnb_backend.user.Controller;

import com.ntdquan.airbnb_backend.system.Result;
import com.ntdquan.airbnb_backend.system.StatusCode;
import com.ntdquan.airbnb_backend.user.DTO.UserInfoDTO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.ntdquan.airbnb_backend.user.DTO.UserDTO;
import com.ntdquan.airbnb_backend.user.Service.UserService;
import com.ntdquan.airbnb_backend.user.auth.JwtService;
import com.ntdquan.airbnb_backend.user.model.User;


@RestController
@CrossOrigin(origins = "http://localhost:3000/")
@RequestMapping("/api/user")
public class UserController {
	@Autowired
	private UserService userService;
	
	@Autowired
	private JwtService jwtService;
	
	private static final Logger logger = LoggerFactory.getLogger(UserController.class);

	@GetMapping("/{userId}")
	public Result getUserInfo(@PathVariable Long userId) {
		UserInfoDTO userInfo = userService.getUserInfoById(userId);
		return new Result(true, StatusCode.SUCCESS, "Get user info", userInfo);
	}

}
