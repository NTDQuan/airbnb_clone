package com.ntdquan.airbnb_backend.Booking.model;

import java.math.BigDecimal;
import java.time.LocalDate;

import com.ntdquan.airbnb_backend.Homestay.Model.Homestay;
import com.ntdquan.airbnb_backend.user.model.User;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Booking {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@ManyToOne
	@JoinColumn(name= "homestay_id")
	private Homestay homestay;
	
	@ManyToOne
	@JoinColumn(name= "user_id")
	private User user;
	private Integer bookingStatus;
	private LocalDate checkinDate;
	private LocalDate checkoutDate;
	private BigDecimal nightlyPrice;
	private BigDecimal serviceFee;
	private BigDecimal cleaningService;
	private BigDecimal totalPrice;
	
	public Booking() {
		super();
	}

	public Booking(Long id, Homestay homestay, User user, Integer bookingStatus, LocalDate checkinDate,
			LocalDate checkoutDate, BigDecimal nightlyPrice, BigDecimal serviceFee, BigDecimal cleaningService,
			BigDecimal totalPrice) {
		super();
		this.id = id;
		this.homestay = homestay;
		this.user = user;
		this.bookingStatus = bookingStatus;
		this.checkinDate = checkinDate;
		this.checkoutDate = checkoutDate;
		this.nightlyPrice = nightlyPrice;
		this.serviceFee = serviceFee;
		this.cleaningService = cleaningService;
		this.totalPrice = totalPrice;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Homestay getHomestay() {
		return homestay;
	}

	public void setHomestay(Homestay homestay) {
		this.homestay = homestay;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Integer getBookingStatus() {
		return bookingStatus;
	}

	public void setBookingStatus(Integer bookingStatus) {
		this.bookingStatus = bookingStatus;
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

	public BigDecimal getNightlyPrice() {
		return nightlyPrice;
	}

	public void setNightlyPrice(BigDecimal nightly_price) {
		this.nightlyPrice = nightly_price;
	}

	public BigDecimal getServiceFee() {
		return serviceFee;
	}

	public void setServiceFee(BigDecimal serviceFee) {
		this.serviceFee = serviceFee;
	}

	public BigDecimal getCleaningService() {
		return cleaningService;
	}

	public void setCleaningService(BigDecimal cleaningService) {
		this.cleaningService = cleaningService;
	}

	public BigDecimal getTotalPrice() {
		return totalPrice;
	}

	public void setTotalPrice(BigDecimal totalPrice) {
		this.totalPrice = totalPrice;
	}
	
	
}
