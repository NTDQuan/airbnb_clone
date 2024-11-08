package com.ntdquan.airbnb_backend.system;

import com.ntdquan.airbnb_backend.Homestay.Model.Homestay;
import com.ntdquan.airbnb_backend.user.Service.UserService;
import com.ntdquan.airbnb_backend.user.model.User;
import org.apache.logging.log4j.Logger;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DBDataInitializer implements CommandLineRunner {
    private final UserService userService;

    public DBDataInitializer(UserService userService) {
        this.userService = userService;
    }

    @Override
    public void run(String... args) throws Exception {
        User u1 = new User();
        u1.setId((long)1);
        u1.setEmail("admin@admin.com");
        u1.setPassword("admin");
        this.userService.save(u1);
    }
}
