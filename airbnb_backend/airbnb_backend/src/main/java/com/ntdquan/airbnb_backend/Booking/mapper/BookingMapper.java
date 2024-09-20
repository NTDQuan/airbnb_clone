package com.ntdquan.airbnb_backend.Booking.mapper;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.ntdquan.airbnb_backend.Booking.dto.Response.BookingResponse;
import com.ntdquan.airbnb_backend.Booking.model.Booking;
import com.ntdquan.airbnb_backend.Booking.model.BookingGuests;
import com.ntdquan.airbnb_backend.Booking.repository.BookingGuestRepository;

public class BookingMapper {
	@Autowired
	private BookingGuestRepository bookingGuestRepository;
	
	BookingResponse toResponse(Booking booking) {
		BookingResponse dto = new BookingResponse();
		dto.setBookingId(booking.getId());
		dto.setUserId(booking.getUser().getId());
		dto.setHomestayId(booking.getHomestay().getId());
		dto.setCheckinDate(booking.getCheckinDate().toString());
		dto.setCheckoutDate(booking.getCheckoutDate().toString());
		dto.setAdaultGuests(getNumberOfGuests(booking, "ADULT"));
		dto.setChildGuests(getNumberOfGuests(booking, "CHILD"));
        dto.setStatus(booking.getBookingStatus());
        dto.setNightlyPrice(booking.getNightlyPrice());
        dto.setServiceFee(booking.getServiceFee());
        dto.setTotalPrice(booking.getTotalPrice());
		return dto;
	}
	
	private Integer getNumberOfGuests(Booking booking, String guestTypeNames) {
		List<BookingGuests> bookingGuests = bookingGuestRepository.findByBookingId(booking.getId());
		return bookingGuests.stream()
				.filter(bg -> bg.getGuestType().getTypeName().equals(guestTypeNames))
				.mapToInt(BookingGuests::getNumGuests)
				.sum();
		
	}
}
