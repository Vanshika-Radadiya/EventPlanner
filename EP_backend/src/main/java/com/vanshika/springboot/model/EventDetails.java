package com.vanshika.springboot.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="EventD") 

public class EventDetails {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	int event_id;
	String title;
	String city;
	String location;
	String description;
	int budget;
	String img;
	
	@ManyToOne
	@JoinColumn(name = "eventM_id", nullable = false)
	UserDetails eventM;

	public String getCity() { 
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public int getEvent_id() {
		return event_id;
	}

	public void setEvent_id(int event_id) {
		this.event_id = event_id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	

	public int getBudget() {
		return budget;
	}

	public void setBudget(int budget) {
		this.budget = budget;
	}
	
	public String getImg() {
		return img;
	}

	public void setImg(String img) {
		this.img = img;
	}

	public UserDetails getEventM() {
		return eventM;
	}

	public void setEventM(UserDetails eventM) {
		this.eventM = eventM;
	}
	
	

}
