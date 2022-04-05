package com.test.welcome.controller;

import com.test.welcome.model.UserApp;
import com.test.welcome.service.UserAppService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/welcomeUser")
public class UserAppController {

    @Autowired
    private UserAppService userAppService;

    @PostMapping
    public UserApp create(@RequestBody UserApp userApp) {
        return this.userAppService.create(userApp);
    }
}
