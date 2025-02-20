package com.ntdquan.airbnb_backend.Homestay.Repository;

import com.ntdquan.airbnb_backend.Homestay.Model.FavouriteHomestay;
import com.ntdquan.airbnb_backend.Homestay.Model.Homestay;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

@Repository
public interface FavouriteHomestayRepository extends JpaRepository<FavouriteHomestay, Integer> {
    Optional<FavouriteHomestay> findByUserIdAndHomestayId(Long userId, Long homestayId);

    void deleteByUserIdAndHomestayId(Long userId, Long homestayId);

    @Query("SELECT f.homestay FROM FavouriteHomestay f WHERE f.user.id = :userId")
    List<Homestay> findHomestaysByUserId(@Param("userId") Long userId);
}
