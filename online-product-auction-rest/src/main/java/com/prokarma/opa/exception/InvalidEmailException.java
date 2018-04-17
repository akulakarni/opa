package com.prokarma.opa.exception;

public class InvalidEmailException extends RuntimeException {

	public InvalidEmailException() {
		super("Invalid email entered");	
	}

}
