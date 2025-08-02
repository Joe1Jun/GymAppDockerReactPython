package com.example.gym_app.Controllers;


import com.example.gym_app.DTO.LoginRequest;
import com.example.gym_app.Models.User;
import com.example.gym_app.Services.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;


@CrossOrigin("*")
@RestController
//base endpoint for api
@RequestMapping("/users")
@AllArgsConstructor
public class UserController {
    // Inject user service
    private final UserService userService;



    // Add the post end point
    @PostMapping("/register")
    // Repsi
    public ResponseEntity<User> addUser(@RequestBody User user){
        return ResponseEntity.status(HttpStatus.CREATED).body(userService.saveuser(user));

    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest){
        Optional<User>  user = userService.findUser(loginRequest.getEmail(), loginRequest.getName());

        if(user.isPresent()){
            return  ResponseEntity.ok(user);
        }
        else{
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials"); // 401
        }
    }



}
