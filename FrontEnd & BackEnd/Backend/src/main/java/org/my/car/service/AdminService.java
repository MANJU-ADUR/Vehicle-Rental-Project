package org.my.car.service;

import java.util.List;
import java.util.Optional;

import org.my.car.Exception.AdminNotFoundException;
import org.my.car.dao.AdminDao;
import org.my.car.dto.Admin;
import org.my.car.dto.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class AdminService {

	@Autowired
	private AdminDao adminDao;

	public ResponseEntity<Response<Admin>> saveAdmin(Admin admin) {
		Response<Admin> response = new Response<>();
		response.setData(adminDao.saveAdmin(admin));
		response.setMessage("Admin Saved Wihth ID: " + admin.getId());
		response.setHttpStatusCode(HttpStatus.CREATED.value());
		return new ResponseEntity<Response<Admin>>(response, HttpStatus.CREATED);
	}

	public ResponseEntity<Response<List<Admin>>> findAll() {
		Response<List<Admin>> response = new Response<>();
		List<Admin> admins = adminDao.findall();
		if (admins.size() > 0) {
			response.setData(adminDao.findall());
			response.setMessage("Admin's Deltails");
			response.setHttpStatusCode(HttpStatus.ACCEPTED.value());
			return new ResponseEntity<Response<List<Admin>>>(response, HttpStatus.ACCEPTED);
		}
		throw new AdminNotFoundException("No Admins");
	}

	public ResponseEntity<Response<Admin>> findbyId(Long id) {
		Response<Admin> response = new Response<>();
		Optional<Admin> recAdmin = adminDao.findById(id);
		if (recAdmin.isPresent()) {
			response.setData(recAdmin.get());
			response.setMessage("Admin With Entered ID");
			response.setHttpStatusCode(HttpStatus.OK.value());
			return new ResponseEntity<Response<Admin>>(response, HttpStatus.OK);
		}
		throw new AdminNotFoundException("NO Admin With Entered ID");
	}

	public ResponseEntity<Response<Admin>> updateAdmin(Admin admin) {
		Response<Admin> response = new Response<>();
		Optional<Admin> recAdmin = adminDao.findById(admin.getId());
		if (recAdmin.isPresent()) {
			Admin dbAdmin = recAdmin.get();
			dbAdmin.setEmail(admin.getEmail());
			dbAdmin.setName(admin.getName());
			dbAdmin.setPassword(admin.getPassword());
			dbAdmin.setPhno(admin.getPhno());
			dbAdmin.setUsername(admin.getUsername());
			adminDao.saveAdmin(dbAdmin);
			response.setData(dbAdmin);
			response.setMessage("Admin update with ID: " + admin.getId());
			response.setHttpStatusCode(HttpStatus.ACCEPTED.value());
			return new ResponseEntity<Response<Admin>>(response, HttpStatus.ACCEPTED);
		}
		throw new AdminNotFoundException("cannot Update BCZ Admin ID is Invalid");
	}

	public ResponseEntity<Response<String>> deleteAdmin(Long id) {
		Response<String> response = new Response<>();
		Optional<Admin> recAdmin = adminDao.findById(id);
		if (recAdmin.isPresent()) {
			adminDao.deleteAdmin(id);
			response.setData("user Found");
			response.setMessage("Admin with Entered ID Deleted");
			response.setHttpStatusCode(HttpStatus.OK.value());
			return new ResponseEntity<Response<String>>(response, HttpStatus.OK);
		}
		throw new AdminNotFoundException("Cannot Delete BCZ ID is Invalid");
	}

	public ResponseEntity<Response<Admin>> findByUsernameAndPassword(String username, String password) {
		Optional<Admin> recAdmin = adminDao.findByUsernameAndPassword(username, password);
		Response<Admin> response = new Response<>();
		if (recAdmin.isPresent()) {
			response.setData(recAdmin.get());
			response.setMessage("Crendentials matched");
			response.setHttpStatusCode(HttpStatus.OK.value());
			return new ResponseEntity<Response<Admin>>(response, HttpStatus.OK);
		}
		throw new AdminNotFoundException("Invalid username Or password");
	}

//	public ResponseEntity<Response<Admin>> findbyusername(String name) {
//		Optional<Admin> recAdmin = adminDao.findbyusername(name);
//		Response<Admin> response = new Response<>();
//		if (recAdmin.isPresent()) {
//			response.setData(recAdmin.get());
//			response.setMessage("Admin is present");
//			response.setHttpStatusCode(HttpStatus.OK.value());
//			return new ResponseEntity<Response<Admin>>(response, HttpStatus.OK);
//
//		}
//		throw new AdminNotFoundException("Invalid username");
//	}

//	public ResponseEntity<Response<Admin>> findybyemail(String email, String password) {
//		Response<Admin> response = new Response<>();
//		Optional<Admin> recAdmin = adminDao.findbyemail(email, password);
//		if (recAdmin.isPresent()) {
//			response.setData(recAdmin.get());
//			response.setMessage("Admin Found");
//			response.setHttpStatusCode(HttpStatus.OK.value());
//			return new ResponseEntity<Response<Admin>>(response, HttpStatus.OK);
//		}
//		throw new AdminNotFoundException("Invalid Email/Password");
//	}

//	public ResponseEntity<Response<Admin>> findybyemail(String email) {
//		Response<Admin> response = new Response<>();
//		Optional<Admin> recAdmin = adminDao.findbyemail(email);
//		if (recAdmin.isPresent()) {
//			response.setData(recAdmin.get());
//			response.setMessage("Admin Found");
//			response.setHttpStatusCode(HttpStatus.OK.value());
//			return new ResponseEntity<Response<Admin>>(response, HttpStatus.OK);
//		}
//		throw new AdminNotFoundException("Invalid Email/Password");
//	}
}
