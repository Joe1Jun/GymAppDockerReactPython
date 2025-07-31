package com.example.gym_app.Services;


import com.example.gym_app.Models.User;
import com.example.gym_app.Repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserService {


    private final UserRepository userRepository;


    // method to save user passed from the user controller
    // The controller is used to accept the incoming http requests and passes the responsibility to the service

    public User saveuser(User user){
      return userRepository.save(user);

    }


}
