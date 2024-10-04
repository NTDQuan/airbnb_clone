package com.ntdquan.airbnb_backend.user.auth;

import org.springframework.security.authorization.AuthorizationDecision;
import org.springframework.security.authorization.AuthorizationManager;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.security.web.access.intercept.RequestAuthorizationContext;
import org.springframework.stereotype.Component;
import org.springframework.web.util.UriTemplate;

import java.util.HashMap;
import java.util.Map;
import java.util.function.Supplier;

@Component
public class UserRequestAuthorizationManager implements AuthorizationManager<RequestAuthorizationContext> {
    private static final UriTemplate USER_URI_TEMPLATE = new UriTemplate("/user/{userId}");

    @Override
    public AuthorizationDecision check(Supplier<Authentication> authenticationSupplier, RequestAuthorizationContext context) {
        Map<String, String> uriVariables = USER_URI_TEMPLATE.match(context.getRequest().getRequestURI());
        String userIdFromRequestUri = uriVariables.get("userId");

        String userIdFromJwt = ((Jwt) authenticationSupplier.get().getPrincipal()).getClaim("userId").toString();

        boolean userIdsMatch = userIdFromRequestUri != null & userIdFromRequestUri.equals(userIdFromJwt);

        return new AuthorizationDecision(userIdsMatch);
    }
}
