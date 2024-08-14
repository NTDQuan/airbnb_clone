package com.ntdquan.airbnb_backend.Amenity.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ntdquan.airbnb_backend.Amenity.Model.Amenity;

@Repository
public interface AmenityRepository extends JpaRepository<Amenity, Long> {
}
