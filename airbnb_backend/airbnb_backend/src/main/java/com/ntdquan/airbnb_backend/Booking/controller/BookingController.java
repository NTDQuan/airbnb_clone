package com.ntdquan.airbnb_backend.Booking.controller;

import com.ntdquan.airbnb_backend.Booking.dto.Request.CheckBookedRequestDTO;
import com.ntdquan.airbnb_backend.Booking.service.AvailabilityService;
import com.ntdquan.airbnb_backend.system.Result;
import com.ntdquan.airbnb_backend.system.StatusCode;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import com.ntdquan.airbnb_backend.Booking.dto.Response.BookingResponse;
import com.ntdquan.airbnb_backend.Booking.dto.Request.BookingRequestDTO;
import com.ntdquan.airbnb_backend.Booking.service.BookingService;

import java.time.LocalDate;
import java.util.List;

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

	@GetMapping("/check/{homestayId}/{userId}")
	public Result checkBooked(@PathVariable Long homestayId, @PathVariable Long userId) {
		log.info("check booking: homestayId={}, userId={}", homestayId, userId);
		CheckBookedRequestDTO request = new CheckBookedRequestDTO(homestayId, userId);
		boolean result = bookingService.checkBooked(request);

		if (result) {
			return new Result(true, StatusCode.SUCCESS, "User has already booked this homestay");
		}
		return new Result(true, StatusCode.NOT_FOUND, "User has not booked this homestay");
	}

	@GetMapping("/unavailabledates/{homestayId}")
	public Result unavailableDates(@PathVariable Long homestayId) {
		log.info("unavailable date booking: homestayId={}", homestayId);
		List<LocalDate> result = bookingService.getUnavailableDate(homestayId);
		return new Result(true, StatusCode.SUCCESS, "Unavailable date booking", result);
	}

	@GetMapping()
	public Result getTrips() {
		log.info("get trip bookings");
		List<BookingResponse> result = bookingService.getReservation();
		return new Result(true, StatusCode.SUCCESS, "Trip bookings", result);
	}

	@GetMapping("/reservation")
	public Result getHostingReservation() {
		log.info("get hosting reservation");
		List<BookingResponse> result = bookingService.getHostingReservation();
		return new Result(true, StatusCode.SUCCESS, "Hosting reservation", result);
	}
}
