package com.vanshika.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.vanshika.springboot.model.EventDetails;
import com.vanshika.springboot.model.UserDetails;
import com.vanshika.springboot.repository.EventRepository;
import com.vanshika.springboot.repository.UserRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class EventController {
	@Autowired
	private EventRepository eventRepository;
	@GetMapping("/getEvents")
	public List<EventDetails> getAllEvents(){
		return eventRepository.findAll();
	}	
	
	@GetMapping("/type/{title}/location/{city}")
	public List<EventDetails> findEvents(@PathVariable String title,@PathVariable String city){
		return eventRepository.findEvent(title,city);
	}
	
	@GetMapping("/event/{event_id}")
	public EventDetails findEventDetails(@PathVariable int event_id){
		return eventRepository.findEventDetails(event_id);
	}
	
	@GetMapping("/event/{title}/{city}/{budget}")
	public List<EventDetails> getEvents(@PathVariable String title,@PathVariable String city,@PathVariable int budget){
		return eventRepository.getEvent(title,city,budget);
	}
}

