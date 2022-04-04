package com.test.welcome.repository;

import com.test.welcome.model.UserApp;
import org.apache.catalina.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserAppRepo extends MongoRepository<UserApp, String> {
}
