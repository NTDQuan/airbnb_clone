package com.ntdquan.airbnb_backend.Booking.dto.Request;

public class CheckBookedRequestDTO {
    private Long userId;
    private Long homestayId;

    public CheckBookedRequestDTO(Long userId, Long homestayId) {
        this.userId = userId;
        this.homestayId = homestayId;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getHomestayId() {
        return homestayId;
    }

    public void setHomestayId(Long homestayId) {
        this.homestayId = homestayId;
    }
}
