package com.ntdquan.airbnb_backend.user.DTO;

import java.time.LocalDateTime;
import java.util.Date;

import com.ntdquan.airbnb_backend.user.model.User;

public class UserDTO {
	private Long id;
    private String email;
    private String image;
    private String name;
    private String address;
    private String phoneNumber;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    
	public UserDTO() {
		super();
	}

	public UserDTO(User user) {
        this.id = user.getId();
        this.email = user.getEmail();
        this.image = user.getImage();
        this.name = user.getName();
        this.address = user.getAddress();
        this.phoneNumber = user.getPhoneNumber();
        this.createdAt = user.getCreatedAt();
        this.updatedAt = user.getUpdatedAt();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
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
    
}
