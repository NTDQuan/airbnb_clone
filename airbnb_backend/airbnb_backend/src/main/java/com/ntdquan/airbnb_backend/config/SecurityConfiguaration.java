package com.ntdquan.airbnb_backend.config;

import com.nimbusds.jose.jwk.JWK;
import com.nimbusds.jose.jwk.JWKSet;
import com.nimbusds.jose.jwk.RSAKey;
import com.nimbusds.jose.jwk.source.ImmutableJWKSet;
import com.nimbusds.jose.jwk.source.JWKSource;
import com.nimbusds.jose.proc.SecurityContext;
import com.ntdquan.airbnb_backend.user.auth.CustomBasicAuthenticationEntryPoint;
import com.ntdquan.airbnb_backend.user.auth.CustomBearerTokenAccessDeniedHandler;
import com.ntdquan.airbnb_backend.user.auth.CustomBearerTokenAuthenticationEntryPoint;
import com.ntdquan.airbnb_backend.user.auth.UserRequestAuthorizationManager;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.security.oauth2.jwt.JwtEncoder;
import org.springframework.security.oauth2.jwt.NimbusJwtDecoder;
import org.springframework.security.oauth2.jwt.NimbusJwtEncoder;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationConverter;
import org.springframework.security.oauth2.server.resource.authentication.JwtGrantedAuthoritiesConverter;
import org.springframework.security.web.SecurityFilterChain;

import java.security.KeyPair;
import java.security.KeyPairGenerator;
import java.security.NoSuchAlgorithmException;
import java.security.interfaces.RSAPrivateKey;
import java.security.interfaces.RSAPublicKey;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity
public class SecurityConfiguaration {
	private final RSAPublicKey publicKey;

	private final RSAPrivateKey privateKey;

	private final CustomBasicAuthenticationEntryPoint customBasicAuthenticationEntryPoint;

	private final CustomBearerTokenAuthenticationEntryPoint customBearerTokenAuthenticationEntryPoint;

	private final CustomBearerTokenAccessDeniedHandler customBearerTokenAccessDeniedHandler;

	private final UserRequestAuthorizationManager userRequestAuthorizationManager;

	public SecurityConfiguaration(
			CustomBasicAuthenticationEntryPoint customBasicAuthenticationEntryPoint,
			CustomBearerTokenAuthenticationEntryPoint customBearerTokenAuthenticationEntryPoint,
			CustomBearerTokenAccessDeniedHandler customBearerTokenAccessDeniedHandler,
			UserRequestAuthorizationManager userRequestAuthorizationManager) throws NoSuchAlgorithmException {
		KeyPairGenerator keyPairGenerator = KeyPairGenerator.getInstance("RSA");
		keyPairGenerator.initialize(2048);
		KeyPair keyPair = keyPairGenerator.generateKeyPair();
		this.publicKey = (RSAPublicKey) keyPair.getPublic();
		this.privateKey = (RSAPrivateKey) keyPair.getPrivate();
		this.customBasicAuthenticationEntryPoint = customBasicAuthenticationEntryPoint;
		this.customBearerTokenAuthenticationEntryPoint = customBearerTokenAuthenticationEntryPoint;
		this.customBearerTokenAccessDeniedHandler = customBearerTokenAccessDeniedHandler;
		this.userRequestAuthorizationManager = userRequestAuthorizationManager;
	}

	@Bean
	protected SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
		return http
				.authorizeHttpRequests(
						req->req.requestMatchers("/api/auth/**").permitAll()
						.requestMatchers(HttpMethod.GET, "/api/homestay/**").permitAll()
						.requestMatchers(HttpMethod.GET, "/api/user/**").permitAll()
						.requestMatchers("/api/**").authenticated()
						.anyRequest().authenticated()
				)
				.httpBasic(httpBasic -> httpBasic.authenticationEntryPoint(this.customBasicAuthenticationEntryPoint))
				.csrf(csrf -> csrf.disable())
				.cors(Customizer.withDefaults())
				.oauth2ResourceServer(oauth2ResourceServer -> oauth2ResourceServer.jwt().and()
						.authenticationEntryPoint(this.customBearerTokenAuthenticationEntryPoint)
						.accessDeniedHandler(this.customBearerTokenAccessDeniedHandler)
				)
				.sessionManagement(session->session
						.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
				.build();
	}
	
	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder(12);
	}

	@Bean
	public JwtEncoder jwtEncoder() {
		JWK jwk = new RSAKey.Builder(this.publicKey).privateKey(this.privateKey).build();
		JWKSource<SecurityContext> jwkSet = new ImmutableJWKSet<>(new JWKSet(jwk));
		return new NimbusJwtEncoder(jwkSet);
	}

	@Bean
	public JwtDecoder jwtDecoder() {
		return NimbusJwtDecoder.withPublicKey(this.publicKey).build();
	}

	@Bean
	public JwtAuthenticationConverter jwtAuthenticationConverter() {
		JwtGrantedAuthoritiesConverter jwtGrantedAuthoritiesConverter = new JwtGrantedAuthoritiesConverter();

		jwtGrantedAuthoritiesConverter.setAuthoritiesClaimName("authorities");
		jwtGrantedAuthoritiesConverter.setAuthorityPrefix("");

		JwtAuthenticationConverter jwtAuthenticationConverter = new JwtAuthenticationConverter();
		jwtAuthenticationConverter.setJwtGrantedAuthoritiesConverter(jwtGrantedAuthoritiesConverter);
		return jwtAuthenticationConverter;
	}
}
