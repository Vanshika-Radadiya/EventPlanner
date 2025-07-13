package com.vanshika.springboot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.vanshika.springboot.model.UserDetails;

public interface UserRepository extends JpaRepository<UserDetails,Integer> {
	 @Query("SELECT u FROM UserDetails u WHERE u.name = :user AND u.password = :password")
	    List<UserDetails> findByNamePass(@Param("user") String user, @Param("password") String password);
}
