package com.prokarma.opa.service.validator;

import static org.mockito.Mockito.reset;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.prokarma.opa.exception.InvalidPasswordException;
import com.prokarma.opa.exception.InvalidPasswordResetRequest;
import com.prokarma.opa.repository.PasswordResetTokenRepository;
import com.prokarma.opa.util.ValidationUtils;
import com.prokarma.opa.web.domain.Error;
import com.prokarma.opa.web.domain.ResetPasswordVo;

@Component
public class ResetPasswordValidatorImpl implements ResetPasswordValidator {

	private final PasswordResetTokenRepository passwordResetTokenRepository;

	@Autowired
	public ResetPasswordValidatorImpl(PasswordResetTokenRepository passwordResetTokenRepository) {
		this.passwordResetTokenRepository = passwordResetTokenRepository;
	}

	@Override
	public void validate(ResetPasswordVo resetPasswordVo) {
		if(passwordResetTokenRepository.findByEmailAndToken(resetPasswordVo.getEmail(), resetPasswordVo.getToken()) == null) {
			System.out.println(resetPasswordVo.getEmail());
			System.out.println(resetPasswordVo.getToken());
			throw new InvalidPasswordResetRequest();
		}		
		List<Error> errors = ValidationUtils.validatePassword(resetPasswordVo.getPassword());
		if (errors.size() > 0) {
			throw new InvalidPasswordException(errors.get(0).getMessage());
		}
	}
}
