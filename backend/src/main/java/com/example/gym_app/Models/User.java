package com.example.gym_app.Models;


import jakarta.persistence.Entity;

import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;
import jakarta.persistence.Id;


@Entity
@Table(name = "app_user")
@Getter
@Setter

public class User {

    @Id
    private Long id;

    private String firstName;

    private String email;

    private String password;



}
