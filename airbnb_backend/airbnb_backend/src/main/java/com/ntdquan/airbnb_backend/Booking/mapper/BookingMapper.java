package com.ntdquan.airbnb_backend.Booking.mapper;

import org.springframework.stereotype.Component;

import com.ntdquan.airbnb_backend.Booking.DTO.BookingResponse;
import com.ntdquan.airbnb_backend.Booking.Model.Booking;

@Component
public class BookingMapper {
	public BookingResponse toResponse(Booking booking) {
		BookingResponse dto = new BookingResponse();
		dto.setBookingId(booking.getId());
		dto.setUserId(booking.getUserId().getId());
		dto.setHomestayId(booking.getHomestayId().getId());
		dto.setCheckinDate(booking.getCheckinDate().toString());
		dto.setCheckoutDate(booking.getCheckoutDate().toString());
		dto.setDiscount(booking.getDiscount());
		dto.setGuest(booking.getGuests());
		dto.setSubtotal(booking.getSubtotal());
		dto.setStatus(booking.getStatus());
		dto.setTotalAmount(booking.getTotalAmount());
		dto.setNote(booking.getNote());
		return dto;
	}
}