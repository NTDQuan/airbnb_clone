package com.ntdquan.airbnb_backend.constant;

public enum BookingStatusEnum {
	DRAFT(0),
	BOOKED(1),
	COMPLETED(2),
	CANCELLED(3);
	
	private final int value;

	BookingStatusEnum(int value) {
		this.value = value;
	}

	public int getValue() {
		return value;
	}
	
}
