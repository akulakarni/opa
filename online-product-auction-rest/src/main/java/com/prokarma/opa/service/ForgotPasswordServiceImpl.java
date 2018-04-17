package com.prokarma.opa.service;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.prokarma.opa.converter.PasswordResetConverter;
import com.prokarma.opa.exception.InvalidEmailException;
import com.prokarma.opa.exception.TokenExpiredException;
import com.prokarma.opa.exception.TokenNotFoundException;
import com.prokarma.opa.exception.UserNotFoundException;
import com.prokarma.opa.repository.PasswordResetTokenRepository;
import com.prokarma.opa.repository.UserRepository;
import com.prokarma.opa.repository.model.PasswordResetTokenDto;
import com.prokarma.opa.repository.model.UserDto;
import com.prokarma.opa.service.validator.ResetPasswordValidator;
import com.prokarma.opa.web.domain.ResetPasswordVo;

@Service
public class ForgotPasswordServiceImpl implements ForgotPasswordService {

	private final PasswordResetTokenRepository passwordResetTokenRepository;
	private final UserRepository userRepository;
	private final EmailService emailService;
	private final ResetPasswordValidator resetPasswordValidator;
	private final PasswordResetConverter passwordResetConverter;

	@Autowired
	public ForgotPasswordServiceImpl(PasswordResetTokenRepository passwordResetTokenRepository,
			UserRepository userRepository, EmailService emailService, ResetPasswordValidator resetPasswordValidator,
			PasswordResetConverter passwordResetConverter) {
		this.passwordResetTokenRepository = passwordResetTokenRepository;
		this.userRepository = userRepository;
		this.emailService = emailService;
		this.resetPasswordValidator = resetPasswordValidator;
		this.passwordResetConverter = passwordResetConverter;
	}

	@Override
	@Transactional
	public void generatePasswordResetToken(String email) {
		if (email == null) {
			throw new InvalidEmailException();
		}
		UserDto userDto = userRepository.findByEmail(email);
		if (userDto == null) {
			throw new UserNotFoundException();
		}
		userDto.setToken(passwordResetTokenRepository.createPasswordResetToken(email));
		emailService.sendForgotPasswordEmail(userDto);
	}

	@Override
	public void validatePasswordToken(String email, String token) {
		PasswordResetTokenDto passwordResetTokenDto = passwordResetTokenRepository.findByEmailAndToken(email, token);
		if (passwordResetTokenDto == null) {
			throw new TokenNotFoundException();
		} else if (passwordResetTokenDto.getExpiration().before(new Date())) {
			passwordResetTokenRepository.deleteToken(passwordResetTokenDto);
			throw new TokenExpiredException();
		}
	}

	@Override
	@Transactional
	public void resetPassword(ResetPasswordVo resetPasswordVo) {
		resetPasswordValidator.validate(resetPasswordVo);
		UserDto userDto = passwordResetConverter.toUserDto(resetPasswordVo);
		userRepository.updatePassword(userDto);
		PasswordResetTokenDto passwordResetTokenDto = passwordResetConverter.toPasswordResetTokenDto(resetPasswordVo);
		passwordResetTokenRepository.deleteToken(passwordResetTokenDto);
	}

}
