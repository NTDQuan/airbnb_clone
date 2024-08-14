package com.ntdquan.airbnb_backend.Homestay.DTO;

import java.util.List;

import com.ntdquan.airbnb_backend.user.model.User;

public class HomestayRequest {
	private User hostID;
	private String name;
	private String description;
	private String address;
	private Double latitude;
	private Double longtitude;
	private String geometry;
	private Long wardID;
	private Long districtID;
	private Long cityID;
	private Long provinceID;
	private int maxGuests;
	private List<Long> amenityIds;
	
	public HomestayRequest() {
		super();
	}
	
	public HomestayRequest(User hostID, String name, String description, String address, Double latitude,
			Double longtitude, String geometry, Long wardID, Long districtID, Long cityID, Long provinceID,
			int maxGuests, List<Long> amenityIds) {
		super();
		this.hostID = hostID;
		this.name = name;
		this.description = description;
		this.address = address;
		this.latitude = latitude;
		this.longtitude = longtitude;
		this.geometry = geometry;
		this.wardID = wardID;
		this.districtID = districtID;
		this.cityID = cityID;
		this.provinceID = provinceID;
		this.maxGuests = maxGuests;
		this.amenityIds = amenityIds;
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
	public Double getLongtitude() {
		return longtitude;
	}
	public void setLongtitude(Double longtitude) {
		this.longtitude = longtitude;
	}
	public String getGeometry() {
		return geometry;
	}
	public void setGeometry(String geometry) {
		this.geometry = geometry;
	}
	public Long getWardID() {
		return wardID;
	}
	public void setWardID(Long wardID) {
		this.wardID = wardID;
	}
	public Long getDistrictID() {
		return districtID;
	}
	public void setDistrictID(Long districtID) {
		this.districtID = districtID;
	}
	public Long getCityID() {
		return cityID;
	}
	public void setCityID(Long cityID) {
		this.cityID = cityID;
	}
	public Long getProvinceID() {
		return provinceID;
	}
	public void setProvinceID(Long provinceID) {
		this.provinceID = provinceID;
	}
	public int getMaxGuests() {
		return maxGuests;
	}
	public void setMaxGuests(int maxGuests) {
		this.maxGuests = maxGuests;
	}
	public List<Long> getAmenityIds() {
		return amenityIds;
	}
	public void setAmenityIds(List<Long> amenityIds) {
		this.amenityIds = amenityIds;
	}
	
	
}
