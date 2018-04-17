package com.prokarma.opa.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.prokarma.opa.service.ForgotPasswordService;
import com.prokarma.opa.web.domain.GenericResponse;
import com.prokarma.opa.web.domain.ResetPasswordVo;

@RestController
@RequestMapping("/user")
public class ForgotPasswordController {
	
	private final ForgotPasswordService forgotPasswordService;
	
	@Autowired
	public ForgotPasswordController(ForgotPasswordService forgotPasswordService) {
		this.forgotPasswordService = forgotPasswordService;
	}

	@PostMapping("/forgot-password")
	public ResponseEntity<GenericResponse> forgotPassword(@RequestParam("email") String email) {
		forgotPasswordService.generatePasswordResetToken(email);
		GenericResponse genericResponse = new GenericResponse();
		genericResponse.setMessage("An email has been sent to your email. Please check it for resetting password.");
		return new ResponseEntity<>(genericResponse, HttpStatus.CREATED);
	}
	
	@GetMapping("/validate-password-reset-request")
	public ResponseEntity<GenericResponse> isPasswordTokenValid(@RequestParam("email") String email, @RequestParam("tkn") String token) {
		forgotPasswordService.validatePasswordToken(email, token);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
	
	@PutMapping(value = "/reset-password", consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<GenericResponse> resetPassword(@RequestBody ResetPasswordVo resetPasswordVo) {
		forgotPasswordService.resetPassword(resetPasswordVo);
		GenericResponse genericResponse = new GenericResponse();
		genericResponse.setMessage("Password reset successfully");
		return new ResponseEntity<GenericResponse>(genericResponse, HttpStatus.OK);
	}

}
