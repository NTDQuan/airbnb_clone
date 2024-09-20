package com.ntdquan.airbnb_backend.Booking.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "availability_status")
public class AvailabilityStatus {
	@Id
	private Long id;
	
	@Column(name = "status_name", nullable = false, length = 50)
	private String statusName;

	public AvailabilityStatus() {
		super();
	}

	public AvailabilityStatus(Long id, String statusName) {
		super();
		this.id = id;
		this.statusName = statusName;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getStatusName() {
		return statusName;
	}

	public void setStatusName(String statusName) {
		this.statusName = statusName;
	}
}
