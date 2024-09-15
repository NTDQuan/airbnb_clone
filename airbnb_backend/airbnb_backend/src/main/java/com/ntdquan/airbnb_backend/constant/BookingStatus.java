package com.ntdquan.airbnb_backend.constant;

public enum BookingStatus {
	DRAFT(0),
	BOOKED(1),
	COMPLETED(2),
	CANCELLED(3);
	
	private final int value;

	BookingStatus(int value) {
		this.value = value;
	}

	public int getValue() {
		return value;
	}
	
}
