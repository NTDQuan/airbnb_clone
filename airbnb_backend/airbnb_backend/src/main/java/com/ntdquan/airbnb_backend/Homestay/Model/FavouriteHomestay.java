package com.ntdquan.airbnb_backend.Homestay.Model;

import com.ntdquan.airbnb_backend.user.model.User;
import jakarta.persistence.*;

@Entity
@Table(name = "FavouriteHomestay")
public class FavouriteHomestay {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "homestay_id", nullable = false)
    private Homestay homestay;

    public FavouriteHomestay() {
    }

    public FavouriteHomestay(User user, Homestay homestay) {
        this.user = user;
        this.homestay = homestay;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Homestay getHomestay() {
        return homestay;
    }

    public void setHomestay(Homestay homestay) {
        this.homestay = homestay;
    }
}
