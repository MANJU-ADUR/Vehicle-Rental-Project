package org.my.car.dao;

import java.util.List;
import java.util.Optional;

import org.my.car.dto.Admin;
import org.my.car.repo.AdminRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class AdminDao {

	@Autowired
	private AdminRepo adminRepo;

	public Admin saveAdmin(Admin admin) {
		return adminRepo.save(admin);
	}

	public List<Admin> findall() {
		return adminRepo.findAll();
	}

	public Optional<Admin> findById(Long id) {
		return adminRepo.findById(id);
	}

	public String deleteAdmin(Long id) {
		adminRepo.deleteById(id);
		return "Admin Deleted";
	}

	public Optional<Admin> findByUsernameAndPassword(String username, String password) {
		return adminRepo.findByUsernameAndPassword(username, password);
	}

//	public Optional<Admin> findbyusername(String username) {
//		return adminRepo.findbyusername(username);
//	}
//
//	public Optional<Admin> findbyemail(String email, String password) {
//		return adminRepo.findybyemail(email, password);
//	}

//	public Optional<Admin> findbyemail(String email){
//		return adminRepo.findbyemail(email);
//	}

}
