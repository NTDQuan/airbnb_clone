package com.ntdquan.airbnb_backend.Homestay.DTO;

import java.math.BigDecimal;

public class HomestayCardDTO {
	private Long id;
	private String name;
	private String city;
	private String country;
	private String type;
	private BigDecimal defaultPrice;
	
	public HomestayCardDTO() {
		super();
	}

	public HomestayCardDTO(Long id, String name, BigDecimal defaultPrice, String city, String country, String type) {
		super();
		this.id = id;
		this.name = name;
		this.defaultPrice = defaultPrice;
		this.city = city;
		this.country = country;
		this.type = type;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public BigDecimal getDefaultPrice() {
		return defaultPrice;
	}

	public void setDefaultPrice(BigDecimal defaultPrice) {
		this.defaultPrice = defaultPrice;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}
}
