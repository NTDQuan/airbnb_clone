package com.ntdquan.airbnb_backend.Booking.Controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ntdquan.airbnb_backend.Booking.DTO.BookingRequest;
import com.ntdquan.airbnb_backend.Booking.DTO.BookingResponse;
import com.ntdquan.airbnb_backend.Booking.Service.BookingService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/bookings")
public class BookingController {
	private final BookingService service;

	public BookingController(BookingService service) {
		super();
		this.service = service;
	}
	
	@PostMapping("/")
	BookingResponse bookHomestay(@RequestBody BookingRequest request) throws InterruptedException {
		return service.book(request);
	}
}
