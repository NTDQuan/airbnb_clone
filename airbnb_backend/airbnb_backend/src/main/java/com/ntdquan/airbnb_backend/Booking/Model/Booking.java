package com.ntdquan.airbnb_backend.Booking.Model;

import java.math.BigDecimal;
import java.time.LocalDate;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import com.ntdquan.airbnb_backend.Homestay.Model.Homestay;
import com.ntdquan.airbnb_backend.user.model.User;

import jakarta.persistence.Entity;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "booking")
@EntityListeners(AuditingEntityListener.class)
public class Booking {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User userId;

    @ManyToOne
    @JoinColumn(name = "homestay_id")
    private Homestay homestayId;
	private LocalDate checkinDate;
	private LocalDate checkoutDate;
	private int guests;
	private Integer status;
	private BigDecimal subtotal;
	private BigDecimal discount;
	private BigDecimal totalAmount;
	private String note;
	private String requestId;
	
	public Booking() {
		super();
	}

	public Booking(User userId, Homestay homestayId, LocalDate checkinDate, LocalDate checkoutDate,
			int guests, Integer status, BigDecimal subtotal, BigDecimal discount, BigDecimal totalAmount, String note,
			String requestId) {
		super();
		this.userId = userId;
		this.homestayId = homestayId;
		this.checkinDate = checkinDate;
		this.checkoutDate = checkoutDate;
		this.guests = guests;
		this.status = status;
		this.subtotal = subtotal;
		this.discount = discount;
		this.totalAmount = totalAmount;
		this.note = note;
		this.requestId = requestId;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public User getUserId() {
		return userId;
	}

	public void setUserId(User userId) {
		this.userId = userId;
	}

	public Homestay getHomestayId() {
		return homestayId;
	}

	public void setHomestayId(Homestay homestayId) {
		this.homestayId = homestayId;
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

	public int getGuests() {
		return guests;
	}

	public void setGuests(int guests) {
		this.guests = guests;
	}

	public Integer getStatus() {
		return status;
	}

	public void setStatus(Integer status) {
		this.status = status;
	}

	public BigDecimal getSubtotal() {
		return subtotal;
	}

	public void setSubtotal(BigDecimal subtotal) {
		this.subtotal = subtotal;
	}

	public BigDecimal getDiscount() {
		return discount;
	}

	public void setDiscount(BigDecimal discount) {
		this.discount = discount;
	}

	public BigDecimal getTotalAmount() {
		return totalAmount;
	}

	public void setTotalAmount(BigDecimal totalAmount) {
		this.totalAmount = totalAmount;
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
