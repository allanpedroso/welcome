package com.test.welcome.service;

import com.test.welcome.model.UserApp;
import com.test.welcome.repository.UserAppRepo;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserAppServiceImpl implements UserAppService {

    @Autowired
    private UserAppRepo userAppRepo;

    @Override
    public UserApp create(UserApp userApp) {
       return this.userAppRepo.save(userApp);
    }
}
