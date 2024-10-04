package com.ntdquan.airbnb_backend.Booking.model;

import java.math.BigDecimal;
import java.time.LocalDate;

import com.ntdquan.airbnb_backend.Homestay.Model.Homestay;

import jakarta.persistence.Column;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.MapsId;

@Entity
public class HomestayAvailability {
	@EmbeddedId
	private HomestayAvailabilityId id;
	
	@ManyToOne
	@MapsId("homestayId")
	@JoinColumn(name = "homestay_id")
	private Homestay homestayId;
	
	@Column(insertable=false, updatable=false)
	private LocalDate date;
	
	@Column(name = "price")
	private BigDecimal price;
	
	private Integer availabilityStatus;

	public HomestayAvailability() {
		super();
	}

	public HomestayAvailability(HomestayAvailabilityId id, Homestay homestayId, LocalDate date, BigDecimal price,
			Integer availabilityStatus) {
		super();
		this.id = id;
		this.homestayId = homestayId;
		this.date = date;
		this.price = price;
		this.availabilityStatus = availabilityStatus;
	}

	public HomestayAvailability(Homestay homestayId, LocalDate date, BigDecimal price,
			Integer availabilityStatus) {
		super();
		this.homestayId = homestayId;
		this.date = date;
		this.price = price;
		this.availabilityStatus = availabilityStatus;
	}

	public HomestayAvailabilityId getId() {
		return id;
	}

	public void setId(HomestayAvailabilityId id) {
		this.id = id;
	}

	public Homestay getHomestayId() {
		return homestayId;
	}

	public void setHomestayId(Homestay homestayId) {
		this.homestayId = homestayId;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public BigDecimal getPrice() {
		return price;
	}

	public void setPrice(BigDecimal price) {
		this.price = price;
	}

	public Integer getAvailabilityStatus() {
		return availabilityStatus;
	}

	public void setAvailabilityStatus(Integer availabilityStatus) {
		this.availabilityStatus = availabilityStatus;
	}


	
}
