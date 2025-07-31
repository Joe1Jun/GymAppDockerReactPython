package com.example.gym_app.Controllers;


import com.example.gym_app.Models.User;
import com.example.gym_app.Services.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
//base endpoint for api
@RequestMapping("/users")
@AllArgsConstructor
public class UserController {
    // Inject user service
    private final UserService userService;



    // Add the post end point
    @PostMapping("/add-user")
    // Repsi
    public ResponseEntity<User> addUser(@RequestBody User user){
        return ResponseEntity.status(HttpStatus.CREATED).body(userService.saveuser(user));

    }

}
