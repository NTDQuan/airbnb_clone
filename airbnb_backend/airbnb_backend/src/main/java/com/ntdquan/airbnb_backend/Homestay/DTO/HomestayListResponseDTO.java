package com.ntdquan.airbnb_backend.Homestay.DTO;

public class HomestayListResponseDTO {
	private Long id;
	private String name;
	private String address;
	private String image;
	
	public HomestayListResponseDTO() {
		super();
	}

	public HomestayListResponseDTO(Long id, String name, String address, String image) {
		super();
		this.id = id;
		this.name = name;
		this.address = address;
		this.image = image;
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

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}
}
