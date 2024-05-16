package org.my.car.dao;

import java.util.List;
import java.util.Optional;

import org.my.car.dto.User;
import org.my.car.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class UserDao {

	@Autowired
	private UserRepo userRepo;

	public User save(User user) {
		return userRepo.save(user);
	}

	public Optional<User> findbyphnopass(Long phno, String pass) {
		return userRepo.findUserByphnoAndPassword(phno, pass);
	}

	public Optional<User> findbyemailpass(String email, String pass) {
		return userRepo.findUserByEmailAndPassword(email, pass);
	}

	public List<User> findall() {
		return userRepo.findAll();
	}

}
