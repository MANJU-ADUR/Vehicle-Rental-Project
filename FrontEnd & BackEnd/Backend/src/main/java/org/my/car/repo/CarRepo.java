package org.my.car.repo;

import java.util.List;

import org.my.car.dto.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface CarRepo extends JpaRepository<Car, Long> {

//	@Query("select c from car c where c.admin.id=?1")
//	List<Car> findCarByAdminId(Long adminid);

	@Query("select c from Car c where c.admin.id=?1")
	List<Car> findByAdminId(Long admin_id);

//	@Query("select c from Car c where c.usename.id=?1")
//	List<Car> findByAdminname(String username);

}