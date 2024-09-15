package com.ntdquan.airbnb_backend.Homestay.Mapper;

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
		return dto;
	}
	
	public HomestayCardDTO convertToHomestayCardDTO(Homestay homestay) {
		HomestayCardDTO dto = new HomestayCardDTO();
		dto.setId(homestay.getId());
		dto.setName(homestay.getName());
		dto.setDefaultPrice(homestay.getDefaultPrice());
		return dto;
	}
}

