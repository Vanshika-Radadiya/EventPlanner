package com.vanshika.springboot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.vanshika.springboot.model.EventDetails;
import com.vanshika.springboot.model.UserDetails;

public interface EventRepository extends JpaRepository<EventDetails,Integer>{
	 @Query("SELECT u FROM EventDetails u WHERE LOwer(u.title) like LOWER(:title) AND LOWER(u.city) like LOWER(:city)")
	    List<EventDetails> findEvent(@Param("title") String title, @Param("city") String city);
	 
	 @Query("SELECT u FROM EventDetails u WHERE u.event_id = :event_id")
		EventDetails findEventDetails(@Param("event_id") int event_id);
	 
	 @Query("SELECT u FROM EventDetails u WHERE LOwer(u.title) like LOWER(:title) AND LOWER(u.city) like LOWER(:city) AND u.budget <= :budget")
	    List<EventDetails> getEvent(@Param("title") String title, @Param("city") String city,@Param("budget") int budget);
	 


}
