package org.my.car.service;

import java.util.List;
import java.util.Optional;

import javax.security.auth.login.AccountNotFoundException;

import org.my.car.Exception.AdminNotFoundException;
import org.my.car.Exception.CarNotFoundException;
import org.my.car.dao.AdminDao;
import org.my.car.dao.CarDao;
import org.my.car.dto.Admin;
import org.my.car.dto.Car;
import org.my.car.dto.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class CarService {

	@Autowired
	private CarDao carDao;

	@Autowired
	private AdminDao adminDao;

	public ResponseEntity<Response<Car>> saveCar(Car car, Long admin_id) {
		Response<Car> response = new Response<>();
		Optional<Admin> recAdmin = adminDao.findById(admin_id);
		if (recAdmin.isPresent()) {
			Admin dbAdmin = recAdmin.get();
			dbAdmin.getCars().add(car);
			car.setAdmin(dbAdmin);
			response.setData(carDao.saveCar(car));
			response.setMessage("Car Saved With ID: " + car.getId() + " and Admin ID is: " + admin_id);
			response.setHttpStatusCode(HttpStatus.CREATED.value());
			return new ResponseEntity<Response<Car>>(response, HttpStatus.CREATED);
		}
		throw new AdminNotFoundException("Admin ID is Invalid");
	}

	public ResponseEntity<Response<List<Car>>> findAll() {
		Response<List<Car>> response = new Response<>();
		List<Car> cars = carDao.findAll();
		if (cars.size() > 0) {
			response.setData(carDao.findAll());
			response.setMessage("Car's Deltails");
			response.setHttpStatusCode(HttpStatus.ACCEPTED.value());
			return new ResponseEntity<Response<List<Car>>>(response, HttpStatus.ACCEPTED);
		}
		throw new CarNotFoundException("No Cars");
	}

	public ResponseEntity<Response<Car>> findbyId(Long id) {
		Response<Car> response = new Response<>();
		Optional<Car> recCar = carDao.findById(id);
		if (recCar.isPresent()) {
			response.setData(recCar.get());
			response.setMessage("Car With Entered ID");
			response.setHttpStatusCode(HttpStatus.OK.value());
			return new ResponseEntity<Response<Car>>(response, HttpStatus.OK);
		}
		throw new CarNotFoundException("NO Car With Entered ID");
	}

	public ResponseEntity<Response<Car>> updateCar(Car car) {
		Response<Car> response = new Response<>();
		Optional<Car> recCar = carDao.findById(car.getId());
		if (recCar.isPresent()) {
			Car dbCar = recCar.get();
			dbCar.setCarname(car.getCarname());
			dbCar.setCompany(car.getCompany());
			dbCar.setModel(car.getModel());
			dbCar.setNumber(car.getNumber());
			dbCar.setRentprice(car.getRentprice());
			carDao.saveCar(dbCar);
			response.setData(dbCar);
			response.setMessage("Car update with ID: " + car.getId());
			response.setHttpStatusCode(HttpStatus.ACCEPTED.value());
			return new ResponseEntity<Response<Car>>(response, HttpStatus.ACCEPTED);
		}
		throw new CarNotFoundException("cannot Update BCZ Car ID is Invalid");
	}

	public ResponseEntity<Response<String>> deleteCar(Long id) {
		Response<String> response = new Response<>();
		Optional<Car> recCar = carDao.findById(id);
		if (recCar.isPresent()) {
			carDao.deleteCar(id);
			response.setData("user Found");
			response.setMessage("Car with Entered ID Deleted");
			response.setHttpStatusCode(HttpStatus.OK.value());
			return new ResponseEntity<Response<String>>(response, HttpStatus.OK);
		}
		throw new CarNotFoundException("Cannot Delete BCZ ID is Invalid");
	}

	public ResponseEntity<Response<List<Car>>> findByUserId(Long admin_id) {
		List<Car> cars = carDao.findByAdminId(admin_id);
		Response<List<Car>> response = new Response<>();
		if (cars.isEmpty()) {
			throw new CarNotFoundException("No cars found for entered Admin Id");
		}
		response.setData(cars);
		response.setMessage("List of Products for entered User Id");
		response.setHttpStatusCode(HttpStatus.OK.value());
		return new ResponseEntity<Response<List<Car>>>(response, HttpStatus.OK);
		
//		List<Product> products = productDao.findByMerchantId(merchant_id);
//		if (products.isEmpty()) {
//			throw new ProductNotFoundException("No Products Found for entered Merchant Id");
//		}
//		structure.setBody(products);
//		structure.setMessage("List of Products for Merchant Id");
//		structure.setStatusCode(HttpStatus.OK.value());
//		return new ResponseEntity<ResponseStructure<List<Product>>>(structure, HttpStatus.OK);
	}
}
