package com.ntdquan.airbnb_backend.user.auth;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.ntdquan.airbnb_backend.user.Service.UserService;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class JwtAuthFilter extends OncePerRequestFilter {
	private JwtService jwtService;
	private UserService userUserDetailService;
	
    @Autowired
    public JwtAuthFilter(@Lazy JwtService jwtService, @Lazy UserService userUserDetailService) {
        this.jwtService = jwtService;
        this.userUserDetailService = userUserDetailService;
    }
	
	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
		Cookie[] cookies = request.getCookies();
		String token = null;
		String username = null;
		if (cookies != null) {
			for(Cookie cookie : cookies) {
				if(cookie.getName().equals("accessToken")) {
					token = cookie.getValue();
				}
			}
		}
		
		if (token != null) {
			username = jwtService.extractUsername(token);
		}
		
		if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
			UserDetails userDetails = userUserDetailService.loadUserByUsername(username);
			if (jwtService.validateToken(token)) {
				UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
				authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
				SecurityContextHolder.getContext().setAuthentication(authToken);
			}
		}
		filterChain.doFilter(request, response);
	}
}