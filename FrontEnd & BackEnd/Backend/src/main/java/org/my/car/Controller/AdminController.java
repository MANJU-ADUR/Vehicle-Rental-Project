package org.my.car.Controller;

import java.util.List;

import org.my.car.dto.Admin;
import org.my.car.dto.Response;
import org.my.car.service.AdminService;
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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/admins")
@CrossOrigin(value = "http://localhost:3000/")
public class AdminController {

	@Autowired
	private AdminService adminService;

	@PostMapping
	@ResponseStatus(code = HttpStatus.CREATED, reason = "Admin Saved")
	public ResponseEntity<Response<Admin>> save(@RequestBody Admin admin) {
		return adminService.saveAdmin(admin);
	}

	@GetMapping
	public ResponseEntity<Response<List<Admin>>> findAll() {
		return adminService.findAll();
	}

	@GetMapping(value = "/{id}")
	public ResponseEntity<Response<Admin>> findbyId(@PathVariable(name = "id") Long id) {
		return adminService.findbyId(id);
	}

	@PutMapping
	public ResponseEntity<Response<Admin>> updateAdmin(@RequestBody Admin admin) {
		return adminService.updateAdmin(admin);
	}

	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Response<String>> deleteAdmin(@PathVariable(name = "id") Long id) {
		return adminService.deleteAdmin(id);
	}

	@PostMapping(value = "find-by-username-password")
	public ResponseEntity<Response<Admin>> findByUsernameAndPassword(@RequestParam(name = "username") String username,
			@RequestParam(name = "password") String password) {
		return adminService.findByUsernameAndPassword(username, password);
	}

//	@GetMapping(value = "username")
//	@ResponseStatus(code = HttpStatus.OK, reason = "Merchant Saved")
//	public ResponseEntity<Response<Admin>> findbyusername(@PathVariable String username) {
//		return adminService.findbyusername(username);
//	}

//	@PostMapping(value = "verify-by-email-password")
//	public ResponseEntity<Response<Admin>> Verifybyemail(@RequestParam(name = "email") String email,
//			@RequestParam(name = "email") String password) {
//		return adminService.findybyemail(email, password);
//	}
}
