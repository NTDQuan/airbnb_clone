package com.ntdquan.airbnb_backend.user.mapper;

import com.ntdquan.airbnb_backend.user.DTO.UserDTO;
import com.ntdquan.airbnb_backend.user.model.User;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

@Component
public class UserToUserDTOConverter implements Converter<User, UserDTO> {
    @Override
    public UserDTO convert(User user) {
        final UserDTO userDTO = new UserDTO(user.getId(),
                                            user.getEmail());
        return userDTO;
    }
}
