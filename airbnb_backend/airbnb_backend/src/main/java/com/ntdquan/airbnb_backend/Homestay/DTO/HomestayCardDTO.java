package com.ntdquan.airbnb_backend.Homestay.DTO;

public class HomestayCardDTO {
	private Long id;
	private String name;
	private Long defaultPrice;
	
	public HomestayCardDTO() {
		super();
	}

	public HomestayCardDTO(Long id, String name, Long defaultPrice) {
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

	public Long getDefaultPrice() {
		return defaultPrice;
	}

	public void setDefaultPrice(Long defaultPrice) {
		this.defaultPrice = defaultPrice;
	}
	
	
}
