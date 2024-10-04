package com.ntdquan.airbnb_backend.constant;

public enum HomestayStatusEnum {

    DRAFT(-1),
    INACTIVE(0),
    ACTIVE(1),
    CLOSED(2)
    ;

    private final int value;

	private HomestayStatusEnum(int value) {
		this.value = value;
	}

	public int getValue() {
		return value;
	}
    
}
