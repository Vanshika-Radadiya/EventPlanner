package com.vanshika.springboot.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="CatererD")
public class CatererDetails {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	int menu_id;
	String description;
	String Menu;
	int price;
	String img;
	@ManyToOne
	@JoinColumn(name = "caterer_id", nullable = false)
	UserDetails caterer;
	public int getMenu_id() {
		return menu_id;
	}
	public void setMenu_id(int menu_id) {
		this.menu_id = menu_id;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getMenu() {
		return Menu;
	}
	public void setMenu(String menu) {
		Menu = menu;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	
	public String getImg() {
		return img;
	}
	public void setImg(String img) {
		this.img = img;
	}
	public UserDetails getCaterer() {
		return caterer;
	}
	public void setCaterer(UserDetails caterer) {
		this.caterer = caterer;
	}
	

}
