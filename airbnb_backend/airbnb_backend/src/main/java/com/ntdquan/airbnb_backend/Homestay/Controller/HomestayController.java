package com.ntdquan.airbnb_backend.Homestay.Controller;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ntdquan.airbnb_backend.Homestay.DTO.HomestayCardDTO;
import com.ntdquan.airbnb_backend.Homestay.DTO.HomestayListResponseDTO;
import com.ntdquan.airbnb_backend.Homestay.DTO.HomestayRequest;
import com.ntdquan.airbnb_backend.Homestay.Mapper.Mapper;
import com.ntdquan.airbnb_backend.Homestay.Model.Homestay;
import com.ntdquan.airbnb_backend.Homestay.Service.HomestayService;
import com.ntdquan.airbnb_backend.user.auth.JwtService;
import com.ntdquan.airbnb_backend.user.model.User;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
@RequestMapping("/api/homestay")
public class HomestayController {
	private final HomestayService homestayService;
	private final JwtService jwtService;
	private final Mapper mapper;
	
	@Autowired
	public HomestayController(HomestayService homestayService, JwtService jwtService, Mapper mapper) {
		super();
		this.homestayService = homestayService;
		this.jwtService = jwtService;
		this.mapper = mapper;
	}
	
	@GetMapping("/")
	public ResponseEntity<List<HomestayListResponseDTO>> getAllHomestay() {
		User currentUser = jwtService.getSession();
		List<Homestay> homestayList = homestayService.getHomestayListById(currentUser);
        List<HomestayListResponseDTO> homestayDTOs = homestayList.stream()
                .map(homestayService::convertToResponseDTO)
                .collect(Collectors.toList());
		return ResponseEntity.ok(homestayDTOs);
	}
	
	@PostMapping("/")
	public ResponseEntity<HomestayListResponseDTO> addNewHomestay(@RequestBody HomestayRequest homestayRequest) {
		User currentUser = jwtService.getSession();
		Homestay savedHomestay = homestayService.createHomestay(homestayRequest, currentUser);
		HomestayListResponseDTO homestayDTO = homestayService.convertToResponseDTO(savedHomestay);
		return ResponseEntity.ok(homestayDTO);
	}
	
	@PatchMapping("/{id}")
	public ResponseEntity<Homestay> updateHomestay(@PathVariable Long id, @RequestBody HomestayRequest homestayRequest) {
		Homestay updatedHomestay = homestayService.updateHomestay(id, homestayRequest);
		return ResponseEntity.ok(updatedHomestay);
	}
	
	@GetMapping("/preview/{id}")
	public ResponseEntity<HomestayCardDTO> getHomestayCardByID(@PathVariable Long id) {
		Optional<Homestay> homestayCard = homestayService.getHomestayCardById(id);
		
		if(homestayCard.isPresent()) {
			Homestay homestay = homestayCard.get();
			HomestayCardDTO homestayCardDTO = mapper.convertToHomestayCardDTO(homestay);
			return ResponseEntity.ok(homestayCardDTO);
		} else {
			return ResponseEntity.notFound().build();
		}
	}
}
