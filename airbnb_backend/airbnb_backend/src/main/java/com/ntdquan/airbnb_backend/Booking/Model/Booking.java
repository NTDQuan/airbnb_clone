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
	private BigDecimal discount;
	private BigDecimal totalPrice;
	private String note;
	private String requestId;
	private Integer guests;

	public Booking(Long id, Homestay homestay, User user, Integer bookingStatus, LocalDate checkinDate,
			LocalDate checkoutDate, BigDecimal nightlyPrice, BigDecimal serviceFee, BigDecimal discount,
			BigDecimal totalPrice, String note, String requestId, Integer guests) {
		super();
		this.id = id;
		this.homestay = homestay;
		this.user = user;
		this.bookingStatus = bookingStatus;
		this.checkinDate = checkinDate;
		this.checkoutDate = checkoutDate;
		this.nightlyPrice = nightlyPrice;
		this.serviceFee = serviceFee;
		this.discount = discount;
		this.totalPrice = totalPrice;
		this.note = note;
		this.requestId = requestId;
		this.guests = guests;
	}

	public Booking(Homestay homestay, User user, Integer bookingStatus, LocalDate checkinDate, LocalDate checkoutDate,
			BigDecimal nightlyPrice, BigDecimal serviceFee, BigDecimal discount, BigDecimal totalPrice, String note,
			String requestId, Integer guests) {
		super();
		this.homestay = homestay;
		this.user = user;
		this.bookingStatus = bookingStatus;
		this.checkinDate = checkinDate;
		this.checkoutDate = checkoutDate;
		this.nightlyPrice = nightlyPrice;
		this.serviceFee = serviceFee;
		this.discount = discount;
		this.totalPrice = totalPrice;
		this.note = note;
		this.requestId = requestId;
		this.guests = guests;
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

	public BigDecimal getDiscount() {
		return discount;
	}

	public void setDiscount(BigDecimal discount) {
		this.discount = discount;
	}

	public BigDecimal getTotalPrice() {
		return totalPrice;
	}

	public void setTotalPrice(BigDecimal totalPrice) {
		this.totalPrice = totalPrice;
	}

	public Integer getGuests() {
		return guests;
	}

	public void setGuests(Integer guests) {
		this.guests = guests;
	}

	public String getNote() {
		return note;
	}

	public void setNote(String note) {
		this.note = note;
	}

	public String getRequestId() {
		return requestId;
	}

	public void setRequestId(String requestId) {
		this.requestId = requestId;
	}
	
}
