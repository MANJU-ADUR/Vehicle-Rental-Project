package org.my.car.repo;

import java.util.Optional;

import org.my.car.dto.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface AdminRepo extends JpaRepository<Admin, Long> {

//	Optional<Admin> findbyemail(String email);

//	Optional<Admin> findybyemail(String email,String password);

	Optional<Admin> findByUsernameAndPassword(String username, String password);

//	@Query("select a from Admin a where a.username=?1")
//	Optional<Admin> findbyusername(String username);

}
