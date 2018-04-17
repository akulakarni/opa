package com.prokarma.opa.exception;

public class EmailException extends RuntimeException {

	public EmailException() {
		super("Error sending email");
	}
	
}
