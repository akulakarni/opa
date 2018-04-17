package com.prokarma.opa.converter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import com.prokarma.opa.repository.model.PasswordResetTokenDto;
import com.prokarma.opa.repository.model.UserDto;
import com.prokarma.opa.web.domain.ResetPasswordVo;

@Component
public class PasswordResetConverterImpl implements PasswordResetConverter {

	private PasswordEncoder passwordEncoder;

	@Autowired
	public PasswordResetConverterImpl(PasswordEncoder passwordEncoder) {
		this.passwordEncoder = passwordEncoder;
	}

	@Override
	public UserDto toUserDto(ResetPasswordVo resetPasswordVo) {
		UserDto userDto = new UserDto();
		userDto.setEmail(resetPasswordVo.getEmail());
		userDto.setPassword(passwordEncoder.encode(resetPasswordVo.getPassword()));
		return userDto;
	}

	@Override
	public ResetPasswordVo toVo(UserDto userDto) {
		ResetPasswordVo resetPasswordVo = new ResetPasswordVo();
		resetPasswordVo.setEmail(userDto.getEmail());
		resetPasswordVo.setPassword(userDto.getPassword());
		return resetPasswordVo;
	}

	@Override
	public PasswordResetTokenDto toPasswordResetTokenDto(ResetPasswordVo resetPasswordVo) {
		PasswordResetTokenDto passwordResetTokenDto = new PasswordResetTokenDto();
		passwordResetTokenDto.setEmail(resetPasswordVo.getEmail());
		passwordResetTokenDto.setToken(resetPasswordVo.getToken());
		return passwordResetTokenDto;
	}

}
