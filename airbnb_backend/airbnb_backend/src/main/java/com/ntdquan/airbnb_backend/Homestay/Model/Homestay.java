package com.ntdquan.airbnb_backend.Homestay.Model;

import java.util.List;

import com.ntdquan.airbnb_backend.Amenity.Model.Amenity;
import com.ntdquan.airbnb_backend.user.model.User;

import jakarta.persistence.Entity;
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
	private Double longtitude;
	private String geometry;
	private Long wardID;
	private Long districtID;
	private Long cityID;
	private Long provinceID;
	private int maxGuests;
	
	@ManyToMany
	@JoinTable(
		name = "Homestay_Amenity",
		joinColumns = @JoinColumn(name = "homestayID"),
		inverseJoinColumns = @JoinColumn(name = "amenityID")
	)
	private List<Amenity> amenityList;
	
	public Homestay() {
		
	}

	public Homestay(Long id, User hostID, String name, String description, String address, Double latitude,
			Double longtitude, String geometry, Long wardID, Long districtID, Long cityID, Long provinceID,
			int maxGuests, List<Amenity> amenityList) {
		super();
		this.id = id;
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
		this.amenityList = amenityList;
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

	public List<Amenity> getAmenityList() {
		return amenityList;
	}

	public void setAmenityList(List<Amenity> amenityList) {
		this.amenityList = amenityList;
	}

	

}
