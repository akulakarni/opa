package com.prokarma.opa.exception;

public class TokenExpiredException extends RuntimeException {
	
	public TokenExpiredException() {
		super("The given token has expired");
	}

}
