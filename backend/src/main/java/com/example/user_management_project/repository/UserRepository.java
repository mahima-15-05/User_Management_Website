package com.example.user_management_project.repository;
import com.example.user_management_project.model.User;

import org.springframework.beans.factory.annotation.Autowired;

// Dependency injection ---
// Dependency Injection: Imagine you have a class that needs another class to work. Instead of creating that
//object manually, Spring will inject it for you automatically. This helps keep your code clean and reduces
//manual work.

//The @Autowired annotation in Spring is used to automatically inject dependencies into a class. In simple
//terms, it means that Spring will figure out which object or service needs to be used in another class
//and automatically provide it for you.


import org.springframework.jdbc.core.BeanPropertyRowMapper;
//The BeanPropertyRowMapper class in Spring is used to convert rows from a database query into Java objects (beans). It
// automatically maps the columns from the database to the fields of a Java class, making it easier to work with
// database results.

import org.springframework.jdbc.core.JdbcTemplate;

//The JdbcTemplate class in Spring is a core class used for interacting with databases. It helps you execute SQL
// queries, updates, and retrieve results from a database in a simpler and cleaner way.

import org.springframework.stereotype.Repository;

import java.util.List;
//Purpose: The @Repository annotation marks a class as a repository that handles database interactions
// (e.g., queries, updates, and transactions).

@Repository
public class UserRepository {

    @Autowired
    JdbcTemplate jdbcTemplate;

    public int addUser(User user){
        String sql = "INSERT INTO user (name, age) VALUES (?, ?)";
        return jdbcTemplate.update(sql, user.getName(), user.getAge());
    }

    public User getUserById(int id){
        String sql = "SELECT * FROM user WHERE id = ?";
        return jdbcTemplate.queryForObject(sql, new BeanPropertyRowMapper<>(User.class), id);
    }

     // Read (Retrieve all records)
    public List<User> getAllUser(){
        String sql = "SELECT * FROM user";
        return jdbcTemplate.query(sql, new BeanPropertyRowMapper<>(User.class));
    }

//    update a record
    public int updateUser( User user ){
        String sql = "UPDATE user SET name = ?, age = ?, username=? WHERE id=?";
        return jdbcTemplate.update(sql, user.getName(), user.getAge(), user.getUsername(), user.getID());
    }

//    delete a record
    public int deleteUser(int id ){
        String sql = "DELETE FROM user WHERE id = ?";
        return jdbcTemplate.update(sql, id);
    }
}
