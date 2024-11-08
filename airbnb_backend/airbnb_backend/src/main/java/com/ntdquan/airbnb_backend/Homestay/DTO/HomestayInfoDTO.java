package com.ntdquan.airbnb_backend.Homestay.DTO;

import java.math.BigDecimal;

public class HomestayInfoDTO {
    private Long id;
    private String name;
    private String address;
    private Double latitude;
    private Double longitude;
    private String geometry;
    private String street;
    private String city;
    private String province;
    private String country;
    private int status;
    private int maxGuests;
    private int bedRoomNum;
    private int bedNum;
    private int bathRoomNum;
    private String type;
    private boolean reservation;
    private BigDecimal defaultPrice;

    public HomestayInfoDTO() {}

    public HomestayInfoDTO(Long id, String name, String address, Double latitude, Double longitude, String geometry, String street, String city, String province, String country, int status, int maxGuests, int bedRoomNum, int bedNum, int bathRoomNum, String type, boolean reservation, BigDecimal defaultPrice) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.latitude = latitude;
        this.longitude = longitude;
        this.geometry = geometry;
        this.street = street;
        this.city = city;
        this.province = province;
        this.country = country;
        this.status = status;
        this.maxGuests = maxGuests;
        this.bedRoomNum = bedRoomNum;
        this.bedNum = bedNum;
        this.bathRoomNum = bathRoomNum;
        this.type = type;
        this.reservation = reservation;
        this.defaultPrice = defaultPrice;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Double getLatitude() {
        return latitude;
    }

    public void setLatitude(Double latitude) {
        this.latitude = latitude;
    }

    public Double getLongitude() {
        return longitude;
    }

    public void setLongitude(Double longitude) {
        this.longitude = longitude;
    }

    public String getGeometry() {
        return geometry;
    }

    public void setGeometry(String geometry) {
        this.geometry = geometry;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getProvince() {
        return province;
    }

    public void setProvince(String province) {
        this.province = province;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public int getMaxGuests() {
        return maxGuests;
    }

    public void setMaxGuests(int maxGuests) {
        this.maxGuests = maxGuests;
    }

    public int getBedRoomNum() {
        return bedRoomNum;
    }

    public void setBedRoomNum(int bedRoomNum) {
        this.bedRoomNum = bedRoomNum;
    }

    public int getBedNum() {
        return bedNum;
    }

    public void setBedNum(int bedNum) {
        this.bedNum = bedNum;
    }

    public int getBathRoomNum() {
        return bathRoomNum;
    }

    public void setBathRoomNum(int bathRoomNum) {
        this.bathRoomNum = bathRoomNum;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public boolean isReservation() {
        return reservation;
    }

    public void setReservation(boolean reservation) {
        this.reservation = reservation;
    }

    public BigDecimal getDefaultPrice() {
        return defaultPrice;
    }

    public void setDefaultPrice(BigDecimal defaultPrice) {
        this.defaultPrice = defaultPrice;
    }
}
