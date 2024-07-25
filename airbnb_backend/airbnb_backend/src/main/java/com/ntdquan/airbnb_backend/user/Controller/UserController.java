package com.ntdquan.airbnb_backend.user.Controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ntdquan.airbnb_backend.user.Service.UserService;
import com.ntdquan.airbnb_backend.user.auth.JwtService;
import com.ntdquan.airbnb_backend.user.model.User;


@RestController
@CrossOrigin("*")
@RequestMapping("/api/user")
public class UserController {
	@Autowired
	private UserService userService;
	
	@Autowired
	private JwtService jwtService;
	
	private static final Logger logger = LoggerFactory.getLogger(UserController.class);
	
    @GetMapping("/")
    public User getUser(@RequestHeader("Authorization") String token) {
    	logger.info("Requested token: {}", token);
        String actualToken = token.startsWith("Bearer ") ? token.substring(7) : token;
        String username = jwtService.extractUsername(actualToken);
        User user = (User) userService.loadUserByUsername(username);
        logger.info("Retrieved user details for username: {}", username);
        return user;
    }
}
