package org.my.car.Controller;

import java.util.List;

import org.my.car.dto.Car;
import org.my.car.dto.Response;
import org.my.car.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/cars")
@CrossOrigin("http://localhost:3000")
public class CarController {

	@Autowired
	private CarService carService;

	@PostMapping(value = "{admin-id}")
	@ResponseStatus(code = HttpStatus.CREATED, reason = "Car Saved")
	public ResponseEntity<Response<Car>> save(@RequestBody Car car, @PathVariable(name = "admin-id") long admin_id) {
		return carService.saveCar(car, admin_id);
	}

	@GetMapping
	public ResponseEntity<Response<List<Car>>> findAll() {
		return carService.findAll();
	}

	@GetMapping(value = "/{id}")
	public ResponseEntity<Response<Car>> findbyId(@PathVariable(name = "id") Long id) {
		return carService.findbyId(id);
	}

	@PutMapping
	public ResponseEntity<Response<Car>> updateCar(@RequestBody Car admin) {
		return carService.updateCar(admin);
	}

	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Response<String>> deleteCar(@PathVariable(name = "id") Long id) {
		return carService.deleteCar(id);
	}

	@GetMapping("find-by-adminid/{admin_id}")
	public ResponseEntity<Response<List<Car>>> findByAdminId(@PathVariable Long admin_id) {
		return carService.findByUserId(admin_id);
	}

//	@GetMapping("find-by-adminusername/{admin_username}")
//	public ResponseEntity<Response<List<Car>>> findByAdminusername(
//			@PathVariable(name = "admin_username") String username) {
//		return carService.findByaAdminname(username);
//	}

}
