package com.ntdquan.airbnb_backend.Homestay.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ntdquan.airbnb_backend.Amenity.Model.Amenity;
import com.ntdquan.airbnb_backend.Amenity.Repository.AmenityRepository;
import com.ntdquan.airbnb_backend.Homestay.DTO.HomestayListResponseDTO;
import com.ntdquan.airbnb_backend.Homestay.DTO.HomestayRequest;
import com.ntdquan.airbnb_backend.Homestay.Model.Homestay;
import com.ntdquan.airbnb_backend.Homestay.Repository.HomestayRepository;
import com.ntdquan.airbnb_backend.user.model.User;

@Service
public class HomestayService {
	private final HomestayRepository homestayRepository;
	private final AmenityRepository amenityRepository;
	
	@Autowired
	public HomestayService(HomestayRepository homestayRepository, AmenityRepository amenityRepository) {
		this.homestayRepository = homestayRepository;
		this.amenityRepository = amenityRepository;
	}
	
	public List<Homestay> getAllHomestay() {
		return homestayRepository.findAll();
	}
	
	public Homestay saveHomestay(HomestayRequest homestayRequest, User currentUser) {
		List<Amenity> amenities = homestayRequest.getAmenityIds().stream()
				.map(amenityRepository::findById)
				.filter(Optional::isPresent)
				.map(Optional::get)
				.collect(Collectors.toList());
		Homestay homestay = new Homestay();
        homestay.setHostID(currentUser);
        homestay.setName(homestayRequest.getName());
        homestay.setDescription(homestayRequest.getDescription());
        homestay.setAddress(homestayRequest.getAddress());
        homestay.setLatitude(homestayRequest.getLatitude());
        homestay.setGeometry(homestayRequest.getGeometry());
        homestay.setWardID(homestayRequest.getWardID());
        homestay.setDistrictID(homestayRequest.getDistrictID());
        homestay.setCityID(homestayRequest.getCityID());
        homestay.setProvinceID(homestayRequest.getProvinceID());
        homestay.setMaxGuests(homestayRequest.getMaxGuests());
        homestay.setAmenityList(amenities);
        homestayRepository.save(homestay);
		return homestay;
	}
	
	
	
	public List<Homestay> getHomestayListById(User hostID) {
		return homestayRepository.findByHostID(hostID);
	}
	
	public HomestayListResponseDTO convertToResponseDTO(Homestay homestay) {
		HomestayListResponseDTO dto = new HomestayListResponseDTO();
		dto.setId(homestay.getId());
		dto.setAddress(homestay.getAddress());
		dto.setName(homestay.getName());
		return dto;
	}
}
