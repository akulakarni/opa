package com.prokarma.opa.repository;

import com.prokarma.opa.repository.model.PasswordResetTokenDto;

public interface PasswordResetTokenRepository {
	
	String createPasswordResetToken(String email);

	PasswordResetTokenDto findByEmailAndToken(String email, String token);

	void deleteToken(PasswordResetTokenDto passwordResetTokenDto);
	
}
