package org.my.car.service;

import java.util.List;
import java.util.Optional;

import org.my.car.Exception.AdminNotFoundException;
import org.my.car.dao.UserDao;
import org.my.car.dto.Response;
import org.my.car.dto.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class UserService {

	@Autowired
	private UserDao userDao;

	public ResponseEntity<Response<User>> save(User user) {
		Response<User> response = new Response<>();
		response.setData(userDao.save(user));
		response.setMessage("User saved");
		response.setHttpStatusCode(HttpStatus.CREATED.value());
		return new ResponseEntity<Response<User>>(response, HttpStatus.CREATED);
	}

	public ResponseEntity<Response<User>> findbyphnopass(Long phno, String pass) {
		Response<User> response = new Response<>();
		Optional<User> recUser = userDao.findbyphnopass(phno, pass);
		if (recUser.isPresent()) {
			response.setData(recUser.get());
			response.setMessage("success");
			response.setHttpStatusCode(HttpStatus.OK.value());
			return new ResponseEntity<Response<User>>(response, HttpStatus.OK);
		}
		throw new AdminNotFoundException("User Not Found");
	}

	public ResponseEntity<Response<User>> findbyeamilpass(String email, String pass) {
		Response<User> response = new Response<>();
		Optional<User> recUser = userDao.findbyemailpass(email, pass);
		if (recUser.isPresent()) {
			response.setData(recUser.get());
			response.setMessage("success");
			response.setHttpStatusCode(HttpStatus.OK.value());
			return new ResponseEntity<Response<User>>(response, HttpStatus.OK);
		}
		throw new AdminNotFoundException("User Not Found");
	}

	public ResponseEntity<Response<List<User>>> findall() {
		Response<List<User>> response = new Response<>();
		List<User> users = userDao.findall();
		if (users.isEmpty()) {
			return null;
		} else {
			response.setData(userDao.findall());
			response.setMessage("users Found");
			response.setHttpStatusCode(HttpStatus.OK.value());
			return new ResponseEntity<Response<List<User>>>(response, HttpStatus.OK);

		}
	}

}
