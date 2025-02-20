package com.ntdquan.airbnb_backend.user.mapper;

import com.ntdquan.airbnb_backend.user.DTO.UserInfoDTO;
import com.ntdquan.airbnb_backend.user.model.User;
import org.springframework.stereotype.Component;

@Component
public class UserMapper {
    public UserInfoDTO convertToUserInfoDTO(User user) {
        UserInfoDTO userInfo = new UserInfoDTO();
        userInfo.setId(user.getId());
        userInfo.setName(user.getName());
        userInfo.setEmail(user.getEmail());
        userInfo.setImage(user.getImage());
        return userInfo;
    }
}
