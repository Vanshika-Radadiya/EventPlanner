package com.vanshika.springboot.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="ArtistD") 
public class ArtistDetails {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	int artist_id;
	String description;
	int budget;
	String img;
	@ManyToOne
	@JoinColumn(name = "performer_id", nullable = false)
	UserDetails performer;
	public int getArtist_id() {
		return artist_id;
	}
	public void setArtist_id(int artist_id) {
		this.artist_id = artist_id;
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
	public UserDetails getPerformer() {
		return performer;
	}
	public void setPerformer(UserDetails performer) {
		this.performer = performer;
	}
	
	
	
}
