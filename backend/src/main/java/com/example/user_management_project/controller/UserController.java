package com.example.user_management_project.controller;
import com.example.user_management_project.model.User;
import com.example.user_management_project.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
//import org.springframework.web.bind.annotation.RestController;

//Note: --
//@ResponseBody means:
//“Don't return a view (webpage), just return the actual data directly in the response body.”

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")

//@CrossOrigin(origins = "http://localhost:3000") // Allow React frontend (this will only allow at port 3000)


public class UserController {
    @Autowired
    private UserRepository userRepository;



//    @GetMapping("*")
//    @ResponseBody
//    public String ErrorPage(){
//        return "This is an error page, this page does not exists";
//    }

    @RequestMapping(value = "/**", method = {RequestMethod.GET})
    @ResponseBody
    public String fallback() {
        return "This route does not exist.";
    }

    @GetMapping("/user-list")
    @ResponseBody
    public List<User> showUserList(){
        return userRepository.getAllUser();
    }

//    endpoint -- http://localhost:8080/api/user-list

    @PostMapping("/add-user")
    @ResponseBody
    public ResponseEntity<String> addUser(@RequestBody User user){
        try{
            int result = userRepository.addUser(user);
            if(result>0){
                // Success: return HTTP 200 (OK) with success message
                return ResponseEntity.ok("User added successfully");

            }
            else{
                // Failure: return HTTP 500 (Internal Server Error) with error message
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to add user");
            }
        }catch(Exception e){
            // Exception: return HTTP 400 (Bad Request) with error message
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error: "+e.getMessage());
        }

    }

    @PutMapping("/update-user/{id}")
    @ResponseBody
    public ResponseEntity<String> updateUser(@PathVariable int id, @RequestBody User user){
        user.setId(id);
        int result = userRepository.updateUser(user);
        if(result>0){
            return ResponseEntity.ok("User updated successfully");

        }else{
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Update failed");
        }
    }
    @GetMapping("/user-by-id/{id}")
    public ResponseEntity<User> getUserById(@PathVariable int id) {

        User user = userRepository.getUserById(id);
        return user != null ? ResponseEntity.ok(user) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("delete-user/{id}")
    @ResponseBody
    public ResponseEntity<String> deleteUser(@PathVariable int id){
        int result =userRepository.deleteUser(id);
        if(result>0){
            return ResponseEntity.ok("User deleted successfully");

        }else{
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User not found or could not be deleted");
        }
    }


}
