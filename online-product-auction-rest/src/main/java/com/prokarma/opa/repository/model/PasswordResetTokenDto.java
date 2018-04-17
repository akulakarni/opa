package com.prokarma.opa.repository.model;

import java.util.Date;

public class PasswordResetTokenDto {
	
	private String email;
	private String token;
	private Date expiration;
	
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
	public Date getExpiration() {
		return expiration;
	}
	public void setExpiration(Date expiration) {
		this.expiration = expiration;
	}

}
