package com.vanshika.springboot.controller;
import com.vanshika.springboot.model.UserDetails;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.vanshika.springboot.repository.UserRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class LoginController {
	@Autowired
	private UserRepository userRepository;
	public void insertLoginData() {
		
	}
	@GetMapping("/getall")
	public List<UserDetails> getAllUsers(){
		return userRepository.findAll();
	}
	@PostMapping("/saveUser")
	public void savedetail(@RequestBody UserDetails person) {
		userRepository.save(person);
	}
	@PostMapping("/validateUser")
	public UserDetails validating(@RequestBody UserDetails person) {
		List<UserDetails>data = userRepository.findByNamePass(person.getName(), person.getPassword());
		if(data != null && data.size()>=1) {
			return data.get(0); 
		}
		return null;
	}
	
	

}
