package com.ntdquan.airbnb_backend.Homestay.DTO;

import java.math.BigDecimal;

public class HomestayCardDTO {
	private Long id;
	private String name;
	private BigDecimal defaultPrice;
	
	public HomestayCardDTO() {
		super();
	}

	public HomestayCardDTO(Long id, String name, BigDecimal defaultPrice) {
		super();
		this.id = id;
		this.name = name;
		this.defaultPrice = defaultPrice;
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
	
	
}
