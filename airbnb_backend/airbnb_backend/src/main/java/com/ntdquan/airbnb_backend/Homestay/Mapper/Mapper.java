package com.ntdquan.airbnb_backend.Homestay.Mapper;

import com.ntdquan.airbnb_backend.Homestay.DTO.HomestayInfoDTO;
import org.springframework.stereotype.Component;

import com.ntdquan.airbnb_backend.Homestay.DTO.HomestayCardDTO;
import com.ntdquan.airbnb_backend.Homestay.DTO.HomestayListResponseDTO;
import com.ntdquan.airbnb_backend.Homestay.Model.Homestay;

@Component
public class Mapper {
	public HomestayListResponseDTO convertToResponseDTO(Homestay homestay) {
		HomestayListResponseDTO dto = new HomestayListResponseDTO();
		dto.setId(homestay.getId());
		dto.setAddress(homestay.getAddress());
		dto.setName(homestay.getName());
		dto.setImage(homestay.getImage());
		return dto;
	}
	
	public HomestayCardDTO convertToHomestayCardDTO(Homestay homestay) {
		HomestayCardDTO dto = new HomestayCardDTO();
		dto.setId(homestay.getId());
		dto.setName(homestay.getName());
		dto.setType(homestay.getType());
		dto.setDefaultPrice(homestay.getDefaultPrice());
		dto.setCity(homestay.getCity());
		dto.setCountry(homestay.getCountry());
		dto.setImage(homestay.getImage());
		return dto;
	}

	public HomestayInfoDTO convertToHomestayInfoDTO(Homestay homestay) {
		HomestayInfoDTO dto = new HomestayInfoDTO();
		dto.setId(homestay.getId());
		dto.setAddress(homestay.getAddress());
		dto.setName(homestay.getName());
		dto.setType(homestay.getType());
		dto.setLongitude(homestay.getLongitude());
		dto.setLatitude(homestay.getLatitude());
		dto.setBedNum(homestay.getBedNum());
		dto.setBathRoomNum(homestay.getBathRoomNum());
		dto.setBedRoomNum(homestay.getBedRoomNum());
		dto.setMaxGuests(homestay.getMaxGuests());
		dto.setCity(homestay.getCity());
		dto.setProvince(homestay.getProvince());
		dto.setCountry(homestay.getCountry());
		dto.setStatus(homestay.getStatus());
		dto.setType(homestay.getType());
		dto.setReservation(homestay.isReservation());
		dto.setDefaultPrice(homestay.getDefaultPrice());
		dto.setImage(homestay.getImage());
		dto.setDescription(homestay.getDescription());
		dto.setOwnerId(homestay.getHostID().getId());
		return dto;
	}
}

