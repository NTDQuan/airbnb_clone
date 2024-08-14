package com.ntdquan.airbnb_backend.user.model;

import java.util.Collection;
import java.util.Collections;
import java.util.Date;
import java.util.Objects;
import java.util.Set;
import java.util.UUID;

import org.hibernate.annotations.UuidGenerator;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.ntdquan.airbnb_backend.Homestay.Model.Homestay;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
@Table(name = "user")
public class User implements UserDetails {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column(nullable = false, unique = true)
	private String email;
	private String image;
	@Column(nullable = false)
	private String password;
	private String name;
	private String address;
	private String phoneNumber;
	
	@OneToMany(mappedBy="hostID")
	private Set<Homestay> homestayList;
	
	@Temporal(TemporalType.TIMESTAMP)
	private Date createAt;
	
	@Temporal(TemporalType.TIMESTAMP)
	private Date updatedAt;
	
	public User() {	
	}

	public User(Long id, String email, String image, String password, String name, String address, String phoneNumber,
			Set<Homestay> homestayList ,Date createAt, Date updatedAt) {
		super();
		this.id = id;
		this.email = email;
		this.image = image;
		this.password = password;
		this.name = name;
		this.address = address;
		this.phoneNumber = phoneNumber;
		this.homestayList = homestayList;
		this.createAt = createAt;
		this.updatedAt = updatedAt;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	
	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
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

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public Set<Homestay> getHomestayList() {
		return homestayList;
	}

	public void setHomestayList(Set<Homestay> homestayList) {
		this.homestayList = homestayList;
	}

	public Date getCreateAt() {
		return createAt;
	}

	public void setCreateAt(Date createAt) {
		this.createAt = createAt;
	}

	public Date getUpdatedAt() {
		return updatedAt;
	}

	public void setUpdatedAt(Date updatedAt) {
		this.updatedAt = updatedAt;
	}
	
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return Collections.singleton(new SimpleGrantedAuthority("ROLE_USER"));
	}
	
    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

	@Override
	public int hashCode() {
		return Objects.hash(address, createAt, email, id, image, name, password, phoneNumber, updatedAt);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		User other = (User) obj;
		return Objects.equals(address, other.address) && Objects.equals(createAt, other.createAt)
				&& Objects.equals(email, other.email) && Objects.equals(id, other.id)
				&& Objects.equals(image, other.image) && Objects.equals(name, other.name)
				&& Objects.equals(password, other.password) && Objects.equals(phoneNumber, other.phoneNumber);
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", email=" + email + ", image=" + image + ", password=" + password + ", name=" + name
				+ ", address=" + address + ", phoneNumber=" + phoneNumber + ", publicId=" + ", createAt="
				+ createAt + ", updatedAt=" + updatedAt + "]";
	}	
	
}
