package com.vanshika.springboot.model;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="UserD") 

public class UserDetails {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	int id;
	String name;
	String email;
	long mobile;
	String password;
	String address;
	String a_role;
	String user_type;
	

	@OneToMany(mappedBy = "eventM", cascade = CascadeType.ALL, orphanRemoval = true)
//	List<EventDetails> eventDetails;
	
//	public List<EventDetails> getEventDetails() {
//		return eventDetails;
//	}
//	public void setEventDetails(List<EventDetails> eventDetails) {
//		this.eventDetails = eventDetails;
//	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public long getMobile() {
		return mobile;
	}
	public void setMobile(long mobile) {
		this.mobile = mobile;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getA_role() {
		return a_role;
	}
	public void setA_role(String a_role) {
		this.a_role = a_role;
	}
	public String getUser_type() {
		return user_type;
	}
	public void setUser_type(String user_type) {
		this.user_type = user_type;
	}
	
	

}
