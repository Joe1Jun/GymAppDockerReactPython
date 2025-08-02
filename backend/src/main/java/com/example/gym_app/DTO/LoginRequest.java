package com.example.gym_app.DTO;

import lombok.Data;

import lombok.NoArgsConstructor;


@NoArgsConstructor
@Data
public class LoginRequest {


    private String name;
    private String email;
}
