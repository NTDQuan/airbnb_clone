package com.ntdquan.airbnb_backend.Booking.Model;

import java.math.BigDecimal;
import java.time.LocalDate;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import jakarta.persistence.Entity;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.Table;

@Entity
@Table(name = "homestay_availability")
@IdClass(HomestayAvailabilityId.class)
@EntityListeners(AuditingEntityListener.class)
public class HomestayAvailability {
	@Id
	private Long homestayId;
	private LocalDate date;
	private BigDecimal price;
	private Integer status;
	
	public HomestayAvailability() {
		super();
	}

	public HomestayAvailability(Long homestayId, LocalDate date, BigDecimal price, Integer status) {
		super();
		this.homestayId = homestayId;
		this.date = date;
		this.price = price;
		this.status = status;
	}
	
	public HomestayAvailability(Long homestayId, LocalDate date, Integer status) {
	    this.homestayId = homestayId;
	    this.date = date;
	    this.status = status;
	}

	public Long getHomestayId() {
		return homestayId;
	}

	public void setHomestayId(Long homestayId) {
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

	public Integer getStatus() {
		return status;
	}

	public void setStatus(Integer status) {
		this.status = status;
	}
	
	
}
