package org.my.car.dao;

import java.util.List;
import java.util.Optional;

import org.my.car.dto.Admin;
import org.my.car.dto.Car;
import org.my.car.repo.CarRepo;
import org.my.car.repo.CarRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class CarDao {

	@Autowired
	private CarRepo carRepo;

	public Car saveCar(Car admin) {
		return carRepo.save(admin);
	}

	public List<Car> findAll() {
		return carRepo.findAll();
	}

	public Optional<Car> findById(Long id) {
		return carRepo.findById(id);
	}

	public String deleteCar(Long id) {
		carRepo.deleteById(id);
		return "Car Deletee";
	}

	public List<Car> findByAdminId(Long admin_id) {
		return carRepo.findByAdminId(admin_id);
	}

//	public List<Car> findByAdminname(String username) {
//		return carRepo.findByAdminname(username);
//	}

}
