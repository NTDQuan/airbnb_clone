package com.ntdquan.airbnb_backend.constant;

public enum AvailabilityStatus {
	AVAILABLE(0),
	HELD(1),
	BOOKED(2),
	SERVED(3);
	
    AvailabilityStatus(int value) {
        this.value = value;
    }
	
	private final int value;

	public int getValue() {
		return value;
	}
}
