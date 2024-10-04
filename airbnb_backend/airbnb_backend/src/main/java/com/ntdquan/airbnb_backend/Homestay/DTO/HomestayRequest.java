package com.ntdquan.airbnb_backend.Homestay.DTO;

import java.math.BigDecimal;
import java.util.List;

import com.ntdquan.airbnb_backend.user.model.User;

public class HomestayRequest {
	private User hostID;
	private String name;
	private String description;
	private String address;
	private Double latitude;
	private Double longitude;
	private String geometry;
	private String street;
	private String country;
	private String city;
	private String province;
    private Integer maxGuests;
    private Integer bedRoomNum;
    private Integer bedNum;       
    private Integer bathRoomNum;    
	private List<Long> amenityIds;
	private String type;
	private Boolean reservation;
	private BigDecimal defaultPrice;
	
	public HomestayRequest() {
		super();
	}

	public HomestayRequest(User hostID, String name, String description, String address, Double latitude,
			Double longitude, String geometry, String street, String country, String city, String province,
			int maxGuests, int bedRoomNum, int bedNum, int bathRoomNum, List<Long> amenityIds, String type,
			BigDecimal defaultPrice, Boolean reservation) {
		super();
		this.hostID = hostID;
		this.name = name;
		this.description = description;
		this.address = address;
		this.latitude = latitude;
		this.longitude = longitude;
		this.geometry = geometry;
		this.street = street;
		this.country = country;
		this.city = city;
		this.province = province;
		this.maxGuests = maxGuests;
		this.bedRoomNum = bedRoomNum;
		this.bedNum = bedNum;
		this.bathRoomNum = bathRoomNum;
		this.amenityIds = amenityIds;
		this.type = type;
		this.reservation = reservation;
		this.defaultPrice = defaultPrice;
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

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
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

	public Integer getMaxGuests() {
		return maxGuests;
	}

	public void setMaxGuests(Integer maxGuests) {
		this.maxGuests = maxGuests;
	}

	public Integer getBedRoomNum() {
		return bedRoomNum;
	}

	public void setBedRoomNum(Integer bedRoomNum) {
		this.bedRoomNum = bedRoomNum;
	}

	public Integer getBedNum() {
		return bedNum;
	}

	public void setBedNum(Integer bedNum) {
		this.bedNum = bedNum;
	}

	public Integer getBathRoomNum() {
		return bathRoomNum;
	}

	public void setBathRoomNum(Integer bathRoomNum) {
		this.bathRoomNum = bathRoomNum;
	}

	public List<Long> getAmenityIds() {
		return amenityIds;
	}

	public void setAmenityIds(List<Long> amenityIds) {
		this.amenityIds = amenityIds;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public Boolean isReservation() {
		return reservation;
	}

	public void setReservation(Boolean reservation) {
		this.reservation = reservation;
	}

	public BigDecimal getDefaultPrice() {
		return defaultPrice;
	}

	public void setDefaultPrice(BigDecimal defaultPrice) {
		this.defaultPrice = defaultPrice;
	}

	
	
}
