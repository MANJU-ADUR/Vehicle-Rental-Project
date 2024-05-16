package org.my.car.repo;

import java.util.Optional;

import org.my.car.dto.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User, Long> {

	Optional<User> findUserByphnoAndPassword(Long phno, String password);

	Optional<User> findUserByEmailAndPassword(String email, String password);

}
