package com.Sugar_Bank.fullstacbackend_Sugar_Bank.controller;

import com.Sugar_Bank.fullstacbackend_Sugar_Bank.exception.UserNotFoundException;
import com.Sugar_Bank.fullstacbackend_Sugar_Bank.model.User;
import com.Sugar_Bank.fullstacbackend_Sugar_Bank.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/user")
    User newUser(@RequestBody User newUser) {
        return  userRepository.save(newUser);
    }

    @GetMapping("/users")
    List<User> getAllUsers(){
        return userRepository.findAll();
    }

    @GetMapping("/user/{id}")
    User getUserbyId(@PathVariable Long id) {
        return userRepository.findById(id).orElseThrow(()->new UserNotFoundException(id));
    }

    @PutMapping("/user/{id}")
    User updateUser(@RequestBody User newUser, @PathVariable Long id) {
        return userRepository.findById(id).map(user -> {
            user.setEmail(newUser.getEmail());
            user.setName(newUser.getName());
            user.setCardName(newUser.getCardName());
            return userRepository.save(user);
        }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/user/deposit/{id}")
    User depositAmount(@RequestBody User newUser, @PathVariable Long id) {
        return userRepository.findById(id).map(user -> {
            user.setAmount(Math.round((user.getAmount() + newUser.getAmount())*100)/100.0);
            return userRepository.save(user);
        }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/user/withdraw/{id}")
    User withdrawAmount(@RequestBody User newUser, @PathVariable Long id) {
        return userRepository.findById(id).map(user -> {
            user.setAmount(Math.round((user.getAmount() - newUser.getAmount())*100)/100.0);
            return userRepository.save(user);
        }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @DeleteMapping("/user/{id}")
    String deleteUser(@PathVariable Long id) {
        if(!userRepository.existsById(id)) {
            throw new UserNotFoundException(id);
        }
        userRepository.deleteById(id);
        return "Bank Account with id " + id + " has been deleted successfully";
    }

}
