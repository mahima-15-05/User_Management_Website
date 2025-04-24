package com.example.user_management_project.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class AuthRepository {

    @Autowired
    JdbcTemplate jdbcTemplate;


    public boolean validateUser(String username, String password){
        String sql = "SELECT COUNT(*) FROM user WHERE username = ? AND password = ? ";
        Integer count = jdbcTemplate.queryForObject(sql, Integer.class, username, password);
        return count!=null && count > 0;
    }
}
