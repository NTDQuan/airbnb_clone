package com.ntdquan.airbnb_backend.Homestay.Controller;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import com.ntdquan.airbnb_backend.Homestay.DTO.HomestayInfoDTO;
import com.ntdquan.airbnb_backend.system.Result;
import com.ntdquan.airbnb_backend.system.StatusCode;
import com.ntdquan.airbnb_backend.user.auth.MyUserPrincipal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
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
	
	@GetMapping("/listing")
	public Result getOwnedHomestay() {
		List<Homestay> homestayList = homestayService.getHomestayListById();
        List<HomestayListResponseDTO> homestayDTOs = homestayList.stream()
                .map(homestayService::convertToResponseDTO)
                .collect(Collectors.toList());
		return new Result(true, StatusCode.SUCCESS, "Find all success", homestayDTOs);
	}
	
	@PostMapping("/")
	public Result addNewHomestay(@RequestBody HomestayRequest homestayRequest) {
		Homestay savedHomestay = homestayService.createHomestay(homestayRequest);
		HomestayListResponseDTO homestayDTO = homestayService.convertToResponseDTO(savedHomestay);
		return new Result(true, StatusCode.SUCCESS, "Add new homestay success", homestayDTO);
	}
	
	@PatchMapping("/{id}")
	public Result updateHomestay(@PathVariable Long id, @RequestBody HomestayRequest homestayRequest) {
		Homestay updatedHomestay = homestayService.updateHomestay(id, homestayRequest);
		return new Result(true, StatusCode.SUCCESS, "Update success", updatedHomestay);
	}
	
	@GetMapping("/public/preview/{id}")
	public Result getHomestayCardByID(@PathVariable Long id) {
		Optional<Homestay> homestayCard = homestayService.getHomestayCardById(id);
		
		if(homestayCard.isPresent()) {
			Homestay homestay = homestayCard.get();
			HomestayCardDTO homestayCardDTO = mapper.convertToHomestayCardDTO(homestay);
			return new Result(true, StatusCode.SUCCESS, "Find all success", homestayCardDTO);
		} else {
			return new Result(false, StatusCode.NOT_FOUND, "Not found");
		}
	}
	
	@GetMapping("/public/preview")
	public Result getAllHomestayCardByID() {
		List<Homestay> homestayCardList = homestayService.getAllHomestayCard();
		List<HomestayCardDTO> homestayCardDTOs = homestayCardList.stream()
				.map(mapper::convertToHomestayCardDTO)
				.collect(Collectors.toList());
		return new Result(true, StatusCode.SUCCESS, "Find all success", homestayCardDTOs);
	}
	
	@PatchMapping("/finish/{id}")
	public Result finishCreateHomestay(@PathVariable Long id) {
		Homestay updatedHomestay = homestayService.finishCreateHomestayProcess(id);
		return new Result(true, StatusCode.SUCCESS, "Finish create homestay");
	}

	@GetMapping("/public/{id}")
	public Result getHomestayByID(@PathVariable Long id) {
		Homestay homestay = homestayService.getHomestayById(id);
		if(homestay != null) {
			HomestayInfoDTO homestayInfoDTO = mapper.convertToHomestayInfoDTO(homestay);
			return new Result(true, StatusCode.SUCCESS, "Find all success", homestayInfoDTO);
		}
		else {
			return new Result(false, StatusCode.NOT_FOUND, "Not found");
		}
	}
	
}
