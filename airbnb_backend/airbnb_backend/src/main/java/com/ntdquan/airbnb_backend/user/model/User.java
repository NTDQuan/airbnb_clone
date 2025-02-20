package com.ntdquan.airbnb_backend.user.model;

import java.time.LocalDateTime;
import java.util.Collection;
import java.util.Collections;
import java.util.Date;
import java.util.List;
import java.util.Objects;
import java.util.Set;
import java.util.UUID;

import com.ntdquan.airbnb_backend.Homestay.Model.FavouriteHomestay;
import org.hibernate.annotations.UuidGenerator;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.ntdquan.airbnb_backend.Booking.model.Booking;
import com.ntdquan.airbnb_backend.Homestay.Model.Homestay;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
@Table(name = "user")
@EntityListeners(AuditingEntityListener.class)
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column(nullable = false, unique = true)
	private String email;
	private String image;
	@Column(nullable = false)
	private String password;
	private String name;
	private String address;
	private String phoneNumber;
	
	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
	private List<Booking> bookings;
	
	@OneToMany(mappedBy="hostID")
	private Set<Homestay> homestayList;

	@OneToMany(mappedBy = "user")
	private Set<FavouriteHomestay> favouriteHomestays;
	
    @CreatedDate
    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt;
    
    @LastModifiedDate
    @Column(nullable = false)
    private LocalDateTime updatedAt;
	
	public User() {	
	}

	public User(Long id, String email, String image, String password, String name, String address, String phoneNumber,
			Set<Homestay> homestayList) {
		super();
		this.id = id;
		this.email = email;
		this.image = image;
		this.password = password;
		this.name = name;
		this.address = address;
		this.phoneNumber = phoneNumber;
		this.homestayList = homestayList;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	
	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public Set<Homestay> getHomestayList() {
		return homestayList;
	}

	public void setHomestayList(Set<Homestay> homestayList) {
		this.homestayList = homestayList;
	}
	
	public LocalDateTime getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}

	public LocalDateTime getUpdatedAt() {
		return updatedAt;
	}

	public void setUpdatedAt(LocalDateTime updatedAt) {
		this.updatedAt = updatedAt;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public List<Booking> getBookings() {
		return bookings;
	}

	public void setBookings(List<Booking> bookings) {
		this.bookings = bookings;
	}

	public String getPassword() {
		return password;
	}

	@Override
	public int hashCode() {
		return Objects.hash(address, createdAt, email, homestayList, id, image, name, password, phoneNumber, updatedAt);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		User other = (User) obj;
		return Objects.equals(address, other.address) && Objects.equals(createdAt, other.createdAt)
				&& Objects.equals(email, other.email) && Objects.equals(homestayList, other.homestayList)
				&& Objects.equals(id, other.id) && Objects.equals(image, other.image)
				&& Objects.equals(name, other.name) && Objects.equals(password, other.password)
				&& Objects.equals(phoneNumber, other.phoneNumber) && Objects.equals(updatedAt, other.updatedAt);
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", email=" + email + ", image=" + image + ", password=" + password + ", name=" + name
				+ ", address=" + address + ", phoneNumber=" + phoneNumber + ", homestayList=" + homestayList
				+ ", createdAt=" + createdAt + ", updatedAt=" + updatedAt + "]";
	}


	
}
