package com.ntdquan.airbnb_backend.Booking.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ntdquan.airbnb_backend.Booking.dto.Response.BookingResponse;
import com.ntdquan.airbnb_backend.Booking.dto.Resquest.BookingRequestDTO;
import com.ntdquan.airbnb_backend.Booking.service.BookingService;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
@RequestMapping("/api/bookings")
public class BookingController {
	private static Logger log = LoggerFactory.getLogger(BookingController.class);
	private final BookingService bookingService;
	
	public BookingController(BookingService bookingService) {
		super();
		this.bookingService = bookingService;
	}
	
	@PostMapping
	BookingResponse bookHomestay(@RequestBody BookingRequestDTO request) throws InterruptedException {
		log.info("Booking Request: {}", request);
		return bookingService.book(request);
	}
}
