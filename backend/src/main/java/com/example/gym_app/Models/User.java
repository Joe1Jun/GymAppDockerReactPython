package com.example.gym_app.Models;


import jakarta.persistence.*;

import lombok.Getter;
import lombok.Setter;


@Entity
@Table(name = "app_user")
@Getter
@Setter

public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String firstName;

    private String email;

    private String password;



}
