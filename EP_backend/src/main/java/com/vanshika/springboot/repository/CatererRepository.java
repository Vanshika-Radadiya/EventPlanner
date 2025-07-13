package com.vanshika.springboot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.vanshika.springboot.model.CatererDetails;

public interface CatererRepository extends JpaRepository<CatererDetails,Integer> {
	@Query("SELECT u FROM CatererDetails u WHERE u.menu_id = :menu_id")
	CatererDetails findCaterer(@Param("menu_id") int em_id);

	
	 @Query(value = "SELECT * FROM catererd i where i.caterer_id in(select u.id from userd u where u.address= :location) AND i.price <= :price", nativeQuery = true)
	List<CatererDetails> getCaterer(@Param("location")String location,@Param("price") int price);
	
}
