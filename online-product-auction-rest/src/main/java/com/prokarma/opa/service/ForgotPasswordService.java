package com.prokarma.opa.service;

import com.prokarma.opa.web.domain.ResetPasswordVo;

public interface ForgotPasswordService {

	void generatePasswordResetToken(String email);

	void validatePasswordToken(String email, String token);

	void resetPassword(ResetPasswordVo resetPasswordVo);

}
