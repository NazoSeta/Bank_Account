package com.Sugar_Bank.fullstacbackend_Sugar_Bank.repository;

import com.Sugar_Bank.fullstacbackend_Sugar_Bank.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
