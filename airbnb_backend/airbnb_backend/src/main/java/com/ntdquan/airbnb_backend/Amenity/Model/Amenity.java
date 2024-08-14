package com.ntdquan.airbnb_backend.Amenity.Model;

import java.util.List;

import com.ntdquan.airbnb_backend.Homestay.Model.Homestay;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;

@Entity
public class Amenity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String name;
	
	@ManyToMany(mappedBy = "amenityList")
	private List<Homestay> homestayList;

	public Amenity() {
		super();
	}

	public Amenity(Long id, String name, List<Homestay> homestayList) {
		super();
		this.id = id;
		this.name = name;
		this.homestayList = homestayList;
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

	public List<Homestay> getHomestayList() {
		return homestayList;
	}

	public void setHomestayList(List<Homestay> homestayList) {
		this.homestayList = homestayList;
	}
	
}
