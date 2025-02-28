package com.ntdquan.airbnb_backend.Booking.dto.Request;

import java.time.LocalDate;

public class BookingRequestDTO {
	private String requestId;
	private Long userId;
	private Long homestayId;
	private LocalDate checkinDate;
	private LocalDate checkoutDate;
	private Integer guest;
	private String note;
	private Integer adultGuests;
	private Integer childGuests;
	
	public BookingRequestDTO() {
		super();
	}

	public BookingRequestDTO(String requestId, Long userId, LocalDate checkinDate, LocalDate checkoutDate,
			Integer guest, Long homestayId, String note, Integer adultGuests, Integer childGuests) {
		super();
		this.requestId = requestId;
		this.userId = userId;
		this.checkinDate = checkinDate;
		this.checkoutDate = checkoutDate;
		this.guest = guest;
		this.note = note;
		this.adultGuests = adultGuests;
		this.childGuests = childGuests;
		this.homestayId = homestayId;
	}

	public String getRequestId() {
		return requestId;
	}

	public void setRequestId(String requestId) {
		this.requestId = requestId;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public LocalDate getCheckinDate() {
		return checkinDate;
	}

	public void setCheckinDate(LocalDate checkinDate) {
		this.checkinDate = checkinDate;
	}

	public LocalDate getCheckoutDate() {
		return checkoutDate;
	}

	public void setCheckoutDate(LocalDate checkoutDate) {
		this.checkoutDate = checkoutDate;
	}

	public Integer getGuest() {
		return guest;
	}

	public void setGuest(Integer guest) {
		this.guest = guest;
	}

	public String getNote() {
		return note;
	}

	public void setNote(String note) {
		this.note = note;
	}

	public Integer getAdultGuests() {
		return adultGuests;
	}

	public void setAdultGuests(Integer adultGuests) {
		this.adultGuests = adultGuests;
	}

	public Integer getChildGuests() {
		return childGuests;
	}

	public void setChildGuests(Integer childGuests) {
		this.childGuests = childGuests;
	}

	public Long getHomestayId() {
		return homestayId;
	}

	public void setHomestayId(Long homestayId) {
		this.homestayId = homestayId;
	}

	@Override
	public String toString() {
		return "BookingRequestDTO{" +
				"requestId='" + requestId + '\'' +
				", userId=" + userId +
				", homestayId=" + homestayId +
				", checkinDate=" + checkinDate +
				", checkoutDate=" + checkoutDate +
				", guest=" + guest +
				", note='" + note + '\'' +
				", adultGuests=" + adultGuests +
				", childGuests=" + childGuests +
				'}';
	}
}
