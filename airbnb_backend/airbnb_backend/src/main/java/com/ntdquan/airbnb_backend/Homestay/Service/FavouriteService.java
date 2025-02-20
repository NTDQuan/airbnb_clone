package com.ntdquan.airbnb_backend.Homestay.Service;

import com.ntdquan.airbnb_backend.Homestay.DTO.HomestayCardDTO;
import com.ntdquan.airbnb_backend.Homestay.Mapper.Mapper;
import com.ntdquan.airbnb_backend.Homestay.Model.FavouriteHomestay;
import com.ntdquan.airbnb_backend.Homestay.Model.Homestay;
import com.ntdquan.airbnb_backend.Homestay.Repository.FavouriteHomestayRepository;
import com.ntdquan.airbnb_backend.Homestay.Repository.HomestayRepository;
import com.ntdquan.airbnb_backend.user.model.User;
import com.ntdquan.airbnb_backend.user.repositiory.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class FavouriteService {
    private FavouriteHomestayRepository favouriteHomestayRepository;
    private HomestayRepository homestayRepository;
    private UserRepository userRepository;
    private final Mapper mapper;

    public FavouriteService(FavouriteHomestayRepository favouriteHomestayRepository,
                            HomestayRepository homestayRepository,
                            UserRepository userRepository,
                            Mapper mapper) {
        this.favouriteHomestayRepository = favouriteHomestayRepository;
        this.homestayRepository = homestayRepository;
        this.userRepository = userRepository;
        this.mapper = mapper;
    }

    public Set<HomestayCardDTO> getFavouriteHomestays() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        Jwt jwt = (Jwt) authentication.getPrincipal();
        Long userId = (Long) jwt.getClaims().get("userId");

        Optional<User> userOptional = userRepository.findById(userId);

        if (userOptional.isEmpty()) {
            throw new IllegalArgumentException("User not found.");
        }

        List<Homestay> favouriteHomestays  = favouriteHomestayRepository.findHomestaysByUserId(userId);

        Set<HomestayCardDTO> favouriteHomestayCardDTOS = favouriteHomestays.stream()
                .map(mapper::convertToHomestayCardDTO)
                .collect(Collectors.toSet());

        return favouriteHomestayCardDTOS;
    }

    @Transactional
    public FavouriteHomestay addFavouriteHomestay(Long homestayId) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        Jwt jwt = (Jwt) authentication.getPrincipal();
        Long userId = (Long) jwt.getClaims().get("userId");

        Optional<User> userOptional = userRepository.findById(userId);
        Optional<Homestay> homestayOptional = homestayRepository.findById(homestayId);

        if (userOptional.isEmpty() || homestayOptional.isEmpty()) {
            throw new IllegalArgumentException("User or Homestay not found.");
        }

        Optional<FavouriteHomestay> existingFavourite = favouriteHomestayRepository.findByUserIdAndHomestayId(userId, homestayId);
        if (existingFavourite.isPresent()) {
            throw new IllegalStateException("Homestay is already in your favourites.");
        }

        FavouriteHomestay favouriteHomestay = new FavouriteHomestay(userOptional.get(), homestayOptional.get());
        return favouriteHomestayRepository.save(favouriteHomestay);
    }

    @Transactional
    public void removeFavouriteHomestay(Long homestayId) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        Jwt jwt = (Jwt) authentication.getPrincipal();
        Long userId = (Long) jwt.getClaims().get("userId");

        Optional<FavouriteHomestay> favouriteHomestayOptional = favouriteHomestayRepository.findByUserIdAndHomestayId(userId, homestayId);
        if (favouriteHomestayOptional.isEmpty()) {
            throw new IllegalArgumentException("Homestay not found in your favourites.");
        }

        favouriteHomestayRepository.deleteByUserIdAndHomestayId(userId, homestayId);
    }


}
