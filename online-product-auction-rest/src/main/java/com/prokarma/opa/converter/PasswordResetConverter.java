package com.prokarma.opa.converter;

import com.prokarma.opa.repository.model.PasswordResetTokenDto;
import com.prokarma.opa.repository.model.UserDto;
import com.prokarma.opa.web.domain.ResetPasswordVo;

public interface PasswordResetConverter {
	
	public UserDto toUserDto(ResetPasswordVo resetPasswordVo);
	
	public ResetPasswordVo toVo(UserDto userDto);
	
	public PasswordResetTokenDto toPasswordResetTokenDto(ResetPasswordVo resetPasswordVo);

}
