package com.test.welcome.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document
public class UserApp {

    @Id
    private String id;
    private String name;
    private String email;
    private String phone;

    public UserApp(String name, String email, String phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
}
