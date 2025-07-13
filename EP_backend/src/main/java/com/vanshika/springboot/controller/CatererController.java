package com.vanshika.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.vanshika.springboot.model.CatererDetails;
import com.vanshika.springboot.repository.CatererRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class CatererController {
	@Autowired
	private CatererRepository catererRepository;
	@GetMapping("/getCaterer")
	public List<CatererDetails> getAllCaterer(){
		return catererRepository.findAll();
	}
	
	@GetMapping("/caterer/{menu_id}")
	public CatererDetails findCaterer(@PathVariable int menu_id){
		return catererRepository.findCaterer(menu_id);
	}
	
	@GetMapping("/caterer/{location}/{price}")
	public List<CatererDetails> getCaterer(@PathVariable String location, @PathVariable int price){
		return catererRepository.getCaterer(location,price);
	}
}
