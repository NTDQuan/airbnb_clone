package com.ntdquan.airbnb_backend.system.exception;

import org.hibernate.ObjectNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AccountStatusException;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.oauth2.server.resource.InvalidBearerTokenException;
import org.springframework.validation.FieldError;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.ntdquan.airbnb_backend.system.Result;
import com.ntdquan.airbnb_backend.system.StatusCode;

import java.nio.file.AccessDeniedException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestControllerAdvice
public class ExceptionHandlerAdvice {
	@ExceptionHandler(ObjectNotFoundException.class)
	@ResponseStatus(HttpStatus.NOT_FOUND)
	Result handleObjectNotFound(ObjectNotFoundException e) {
		return new Result(false, StatusCode.NOT_FOUND, e.getMessage());
	}

	@ExceptionHandler(MethodArgumentNotValidException.class)
	@ResponseStatus(HttpStatus.BAD_REQUEST)
	Result handleMethodArgumentNotValid(MethodArgumentNotValidException e) {
		List<ObjectError> errors = e.getBindingResult().getAllErrors();
		Map<String, String> map = new HashMap<>(errors.size());
		errors.forEach((error) -> {
			String key = ((FieldError) error).getField();
			String val = error.getDefaultMessage();
			map.put(key, val);
		});
		return new Result(false, StatusCode.INVALID_ARGUMENT, "Provided arguments are invalid, see data for details.", map);
	}

	@ExceptionHandler({UsernameNotFoundException.class, BadCredentialsException.class})
	@ResponseStatus(HttpStatus.UNAUTHORIZED)
	Result handleAuthenticationException(Exception ex) {
		return new Result(false, StatusCode.UNAUTHORIZED, "username or password is incorrect", ex.getMessage());
	}

	@ExceptionHandler(InvalidBearerTokenException.class)
	@ResponseStatus(HttpStatus.UNAUTHORIZED)
	Result handleInvalidBearerException(InvalidBearerTokenException ex) {
		return new Result(false, StatusCode.UNAUTHORIZED, "The access token is expired", ex.getMessage());
	}

	@ExceptionHandler(AccessDeniedException.class)
	@ResponseStatus(HttpStatus.FORBIDDEN)
	Result handleAccessDeniedException(AccessDeniedException ex) {
		return new Result(false, StatusCode.FORBIDDEN, "No pemission", ex.getMessage());
	}

	@ExceptionHandler(Exception.class)
	@ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
	Result handleException(Exception ex) {
		return new Result(false, StatusCode.INTERNAL_SERVER_ERROR, "Internal Server Error", ex.getMessage());
	}

}
