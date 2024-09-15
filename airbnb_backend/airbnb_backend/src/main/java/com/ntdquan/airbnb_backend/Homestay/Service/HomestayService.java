package com.ntdquan.airbnb_backend.Homestay.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ntdquan.airbnb_backend.Amenity.Model.Amenity;
import com.ntdquan.airbnb_backend.Amenity.Repository.AmenityRepository;
import com.ntdquan.airbnb_backend.Homestay.DTO.HomestayCardDTO;
import com.ntdquan.airbnb_backend.Homestay.DTO.HomestayListResponseDTO;
import com.ntdquan.airbnb_backend.Homestay.DTO.HomestayRequest;
import com.ntdquan.airbnb_backend.Homestay.Mapper.Mapper;
import com.ntdquan.airbnb_backend.Homestay.Model.Homestay;
import com.ntdquan.airbnb_backend.Homestay.Repository.HomestayRepository;
import com.ntdquan.airbnb_backend.exception.ResourceNotFoundException;
import com.ntdquan.airbnb_backend.user.model.User;

import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;

@Service
public class HomestayService {
	private final HomestayRepository homestayRepository;
	private final AmenityRepository amenityRepository;
	
	@Autowired
	public HomestayService(HomestayRepository homestayRepository, AmenityRepository amenityRepository) {
		this.homestayRepository = homestayRepository;
		this.amenityRepository = amenityRepository;
	}
	
    public Homestay getHomestayById(Long id) {
        Optional<Homestay> homestayOptional = homestayRepository.findById(id);
        if (homestayOptional.isPresent()) {
            return homestayOptional.get();
        } else {
            throw new EntityNotFoundException("Homestay not found with id: " + id);
        }
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
        homestay.setStreet(homestayRequest.getStreet());
        homestay.setCountry(homestayRequest.getCountry());
        homestay.setCity(homestayRequest.getCity());
        homestay.setProvince(homestayRequest.getProvince());
        homestay.setMaxGuests(homestayRequest.getMaxGuests());
        homestay.setBedRoomNum(homestayRequest.getBedRoomNum());
        homestay.setBedNum(homestayRequest.getBedNum());
        homestay.setBathRoomNum(homestayRequest.getBathRoomNum());
        homestay.setAmenityList(amenities);
        homestay.setReservation(homestayRequest.isReservation());
        homestay.setType(homestayRequest.getType());
        homestayRepository.save(homestay);
		return homestay;
	}
	
	public Homestay createHomestay(HomestayRequest homestayRequest, User currentUser) {
		Homestay homestay = new Homestay();
        homestay.setHostID(currentUser);
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
	
	public String updateAddress(String street, String city, String province, String country) {
		String address = street + ", " + city + ". " + province + ", " + ", " + country;
		return address;
	}
	
    @Transactional
    public Homestay updateHomestay(Long id, HomestayRequest homestayRequest) {
        Homestay homestay = homestayRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Homestay not found with id " + id));

        // Update fields only if they are present in the DTO
        if (homestayRequest.getName() != null) {
            homestay.setName(homestayRequest.getName());
        }
        if (homestayRequest.getDescription() != null) {
            homestay.setDescription(homestayRequest.getDescription());
        }
        if (homestayRequest.getLatitude() != null) {
            homestay.setLatitude(homestayRequest.getLatitude());
        }
        if (homestayRequest.getLongitude() != null) {
            homestay.setLongitude(homestayRequest.getLongitude());
        }
        if (homestayRequest.getGeometry() != null) {
            homestay.setGeometry(homestayRequest.getGeometry());
        }
        if (homestayRequest.getStreet() != null || 
        	homestayRequest.getCountry() != null ||
        	homestayRequest.getCity() != null ||
        	homestayRequest.getProvince() != null) 
        {
            homestay.setStreet(homestayRequest.getStreet());
            homestay.setCountry(homestayRequest.getCountry());
            homestay.setCity(homestayRequest.getCity());
            homestay.setProvince(homestayRequest.getProvince());
            homestay.setAddress(updateAddress(homestay.getStreet(), homestay.getCity(), homestay.getProvince(), homestay.getCountry()));
        }
        if (homestayRequest.getMaxGuests() != null) {
            homestay.setMaxGuests(homestayRequest.getMaxGuests());
        }
        if (homestayRequest.getBedRoomNum() != null) {
            homestay.setBedRoomNum(homestayRequest.getBedRoomNum());
        }
        if (homestayRequest.getBedNum() != null) {
            homestay.setBedNum(homestayRequest.getBedNum());
        }
        if (homestayRequest.getBathRoomNum() != null) {
            homestay.setBathRoomNum(homestayRequest.getBathRoomNum());
        }
        if (homestayRequest.getType() != null) {
        	homestay.setType(homestayRequest.getType());
        }
        if (homestayRequest.isReservation() != null) {
        	homestay.setReservation(homestayRequest.isReservation());
        }
        if (homestayRequest.getAmenityIds() != null) {
    		List<Amenity> amenities = homestayRequest.getAmenityIds().stream()
    				.map(amenityRepository::findById)
    				.filter(Optional::isPresent)
    				.map(Optional::get)
    				.collect(Collectors.toList());
    		homestay.setAmenityList(amenities);
        }
        if (homestayRequest.getDefaultPrice() != null) {
        	homestay.setDefaultPrice(homestayRequest.getDefaultPrice());
        }
        return homestayRepository.save(homestay);
    }
    
    
    public Optional<Homestay> getHomestayCardById(Long id) {
    	return homestayRepository.findById(id);
    }
}
