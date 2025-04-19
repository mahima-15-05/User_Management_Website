package com.example.user_management_project.controller;
import com.example.user_management_project.model.User;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class AuthController {

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user){
        String username = user.getUsername();
        String password = user.getPassword();

    }
}
