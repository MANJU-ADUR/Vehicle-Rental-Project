package org.my.car.Controller;

import java.util.List;

import org.my.car.dto.Response;
import org.my.car.dto.User;
import org.my.car.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/users")
@CrossOrigin(value = "http://localhost:3000")
public class UserController {

	@Autowired
	private UserService userService;

	@PostMapping
	public ResponseEntity<Response<User>> save(@RequestBody User user) {
		return userService.save(user);
	}

	@GetMapping
	public ResponseEntity<Response<List<User>>> findall() {
		return userService.findall();
	}

	@PostMapping(value = "findbyphnopassword")
	public ResponseEntity<Response<User>> byphnopass(@RequestParam Long phno, @RequestParam String password) {
		return userService.findbyphnopass(phno, password);
	}

	@PostMapping(value = "findbyemailpassword")
	public ResponseEntity<Response<User>> byemailpass(@RequestParam String email, @RequestParam String password) {
		return userService.findbyeamilpass(email, password);
	}
}