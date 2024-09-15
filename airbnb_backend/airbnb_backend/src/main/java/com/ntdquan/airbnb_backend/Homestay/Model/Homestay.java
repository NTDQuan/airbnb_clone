package com.ntdquan.airbnb_backend.Homestay.Model;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import com.ntdquan.airbnb_backend.Amenity.Model.Amenity;
import com.ntdquan.airbnb_backend.user.model.User;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "Homestay")
@EntityListeners(AuditingEntityListener.class)
public class Homestay {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@ManyToOne
	@JoinColumn(name = "user_id", nullable = false)
	private User hostID;
	private String name;
	private String description;
	private String address;
	private Double latitude;
	private Double longitude;
	private String geometry;
	private String street;
	private String city;
	private String province;
	private String country;
	private int maxGuests;
	private int bedRoomNum;
	private int bedNum;
	private int bathRoomNum;
	private String type;
	private boolean reservation;
	private long defaultPrice;
	
	@ManyToMany
	@JoinTable(
		name = "Homestay_Amenity",
		joinColumns = @JoinColumn(name = "homestayID"),
		inverseJoinColumns = @JoinColumn(name = "amenityID")
	)
	private List<Amenity> amenityList;
	
    @CreatedDate
    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt;
    
    @LastModifiedDate
    @Column(nullable = false)
    private LocalDateTime updatedAt;
	
	public Homestay() {
		
	}

	public Homestay(Long id, User hostID, String name, String description, String address, Double latitude,
			Double longitude, String geometry, String street, String city, String province, String country,
			int maxGuests, int bedRoomNum, int bedNum, int bathRoomNum, String type, boolean reservation,
			long defaultPrice, List<Amenity> amenityList, LocalDateTime createdAt, LocalDateTime updatedAt) {
		super();
		this.id = id;
		this.hostID = hostID;
		this.name = name;
		this.description = description;
		this.address = address;
		this.latitude = latitude;
		this.longitude = longitude;
		this.geometry = geometry;
		this.street = street;
		this.city = city;
		this.province = province;
		this.country = country;
		this.maxGuests = maxGuests;
		this.bedRoomNum = bedRoomNum;
		this.bedNum = bedNum;
		this.bathRoomNum = bathRoomNum;
		this.type = type;
		this.reservation = reservation;
		this.defaultPrice = defaultPrice;
		this.amenityList = amenityList;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public User getHostID() {
		return hostID;
	}

	public void setHostID(User hostID) {
		this.hostID = hostID;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Double getLatitude() {
		return latitude;
	}

	public void setLatitude(Double latitude) {
		this.latitude = latitude;
	}

	public Double getLongitude() {
		return longitude;
	}

	public void setLongitude(Double longitude) {
		this.longitude = longitude;
	}

	public String getGeometry() {
		return geometry;
	}

	public void setGeometry(String geometry) {
		this.geometry = geometry;
	}

	public String getStreet() {
		return street;
	}

	public void setStreet(String street) {
		this.street = street;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getProvince() {
		return province;
	}

	public void setProvince(String province) {
		this.province = province;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public int getMaxGuests() {
		return maxGuests;
	}

	public void setMaxGuests(int maxGuests) {
		this.maxGuests = maxGuests;
	}

	public int getBedRoomNum() {
		return bedRoomNum;
	}

	public void setBedRoomNum(int bedRoomNum) {
		this.bedRoomNum = bedRoomNum;
	}

	public int getBedNum() {
		return bedNum;
	}

	public void setBedNum(int bedNum) {
		this.bedNum = bedNum;
	}

	public int getBathRoomNum() {
		return bathRoomNum;
	}

	public void setBathRoomNum(int bathRoomNum) {
		this.bathRoomNum = bathRoomNum;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public boolean isReservation() {
		return reservation;
	}

	public void setReservation(boolean reservation) {
		this.reservation = reservation;
	}

	public long getDefaultPrice() {
		return defaultPrice;
	}

	public void setDefaultPrice(long defaultPrice) {
		this.defaultPrice = defaultPrice;
	}

	public List<Amenity> getAmenityList() {
		return amenityList;
	}

	public void setAmenityList(List<Amenity> amenityList) {
		this.amenityList = amenityList;
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
	
}