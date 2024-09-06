package com.mahima.Backend.Project.controller;

import com.mahima.Backend.Project.exception.UserNotFoundException;
import com.mahima.Backend.Project.model.User;
import com.mahima.Backend.Project.repository.UserRepository;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
//Configuration starts here

//Configuration ends here

@RestController
@CrossOrigin(origins = "http://localhost:3000")// to fetch data in frontend
public class UserController {
    @Autowired
    private UserRepository userRepository;


    // for inserting user in db
    @PostMapping("/create-user")
    User createUser(@RequestBody User newUser) {
        return userRepository.save(newUser);
    }

    // for retrieving user from db
    @GetMapping("/list-user")
    List<User> getAllUser(){
        return userRepository.findAll();
    }

    @GetMapping("/user/{id}")
    User getUserById(@PathVariable Long id){
//        LoggerFactory.getLogger("This is "+userRepository.findById(id));
        return userRepository.findById(id)
               .orElseThrow(()->new UserNotFoundException(id));
    }

    @PutMapping("/edit-user/{id}")
    User updateUser(@RequestBody User newUser, @PathVariable Long id){
        return userRepository.findById(id)
                .map((user)->{
                    user.setUsername(newUser.getUsername());
                    user.setEmail(newUser.getEmail());
                    user.setName(newUser.getName());
                    return userRepository.save(user);
                }).orElseThrow(()->new UserNotFoundException(id));
    }

    @DeleteMapping("delete-user/{id}")
    String deleteUser(@PathVariable Long id){
        if(!userRepository.existsById(id)){
            throw new UserNotFoundException(id);
        }
        userRepository.deleteById(id);
        return "User with id "+id+ " has been deleted successfully";
    }
}
