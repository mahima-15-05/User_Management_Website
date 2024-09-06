package com.mahima.Backend.Project.repository;

import com.mahima.Backend.Project.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

}
