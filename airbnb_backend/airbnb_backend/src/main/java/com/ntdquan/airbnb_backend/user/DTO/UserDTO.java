package com.ntdquan.airbnb_backend.user.DTO;

import java.time.LocalDateTime;
import java.util.Date;

import com.ntdquan.airbnb_backend.user.model.User;
import jakarta.validation.constraints.NotEmpty;

public record UserDTO(Long id,
					  @NotEmpty(message = "username is required")
					  String username) {
}
