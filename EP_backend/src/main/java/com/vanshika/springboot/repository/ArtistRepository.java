package com.vanshika.springboot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.vanshika.springboot.model.ArtistDetails;
import com.vanshika.springboot.model.EventDetails;

public interface  ArtistRepository extends JpaRepository<ArtistDetails,Integer>{
	@Query("SELECT u FROM ArtistDetails u WHERE u.artist_id = :artist_id")
	ArtistDetails findArtist(@Param("artist_id") int artist_id);
	
//	SELECT * FROM ITEM i JOIN REVIEW r ON i.id = r.item_id where AVG(r.rating) < :rating
// @Query(value = "SELECT i FROM Item i where (select AVG(rating) from Review where rating < :rating) > :rating", nativeQuery = true)

 @Query(value = "SELECT * FROM artistd i where i.performer_id IN(select u.id from userd u where u.a_role= :a_role)", nativeQuery = true)
//	@Query("SELECT a FROM ArtistDetails a JOIN UserDetails u ON a.performer_id = u.id WHERE u.a_role = :a_role")
	List<ArtistDetails>findByA_role(@Param("a_role") String a_role);
 
 @Query(value = "SELECT * FROM artistd i where i.performer_id IN(select u.id from userd u where u.a_role= :a_role) AND i.budget <= :price", nativeQuery = true)

 	List<ArtistDetails>getArtist(@Param("a_role") String a_role,@Param("price") int price );
}
