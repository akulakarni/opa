package com.prokarma.opa.exception;

public class UserNotFoundException extends RuntimeException {

	public UserNotFoundException() {
		super("The given user was not found");
	}
	
}
