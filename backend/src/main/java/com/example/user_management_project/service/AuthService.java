package com.example.user_management_project.service;

import com.example.user_management_project.repository.AuthRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class AuthService {

    @Autowired
    AuthRepository authRepository;
    public boolean login(String username, String password){
        return authRepository.validateUser(username,password);





    }
}
