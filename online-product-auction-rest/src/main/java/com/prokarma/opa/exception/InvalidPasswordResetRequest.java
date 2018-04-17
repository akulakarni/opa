package com.prokarma.opa.exception;

public class InvalidPasswordResetRequest extends RuntimeException {

	public InvalidPasswordResetRequest() {
		super("The password reset request was invalid");
	}

}
