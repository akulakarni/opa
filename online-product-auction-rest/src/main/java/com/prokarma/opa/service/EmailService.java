package com.prokarma.opa.service;

import com.prokarma.opa.repository.model.UserDto;

public interface EmailService {
	
	void sendForgotPasswordEmail(UserDto userDto);
	
}
