package com.vanshika.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.vanshika.springboot.model.ArtistDetails;
import com.vanshika.springboot.repository.ArtistRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ArtistController {
	@Autowired
	private ArtistRepository artistRepository;
	@GetMapping("/getartist/{a_role}")
	public List<ArtistDetails> findByA_role(@PathVariable String a_role){
		return artistRepository.findByA_role(a_role);
	}
	@GetMapping("/artist/{artist_id}")
	public ArtistDetails findArtist(@PathVariable int artist_id){
		return artistRepository.findArtist(artist_id);
	}
	@GetMapping("/artist/{a_role}/{budget}")
	public List<ArtistDetails> getArtist(@PathVariable String a_role,@PathVariable int budget){
		return artistRepository.getArtist(a_role, budget);
	}

}
