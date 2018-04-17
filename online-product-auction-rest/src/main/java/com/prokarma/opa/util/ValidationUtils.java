package com.prokarma.opa.util;

import java.util.ArrayList;
import java.util.List;

import com.prokarma.opa.web.domain.Error;

public final class ValidationUtils {

	public static boolean isEmpty(String value) {
		return (value == null) || "".equals(value);
	}
	
	public static List<Error> validatePassword(String password) {
		List<Error> errors = new ArrayList<>();
		if (isEmpty(password))
			errors.add(new Error("password", "Password cannot be empty"));
		else if (password.length() < 6)
			errors.add(new Error("password", "Password must be a minimum of 6 characters"));
		else if (!isValidPassword(password))
			errors.add(new Error("password", "Invalid password"));
		
		return errors;
	}
	
	public static boolean isValidPassword(String password) {
		boolean hasUpperCase = false, hasLowerCase = false, hasSpecialCharacter = false, hasDigit = false;
		for(char c : password.toCharArray()) {
			if(Character.isUpperCase(c)) 
				hasUpperCase = true;
			if(Character.isLowerCase(c))
				hasLowerCase = true;
			if(isSpecialCharacter(c))
				hasSpecialCharacter = true;
			if(isDigit(c))
				hasDigit = true;
			if(hasUpperCase && hasLowerCase && hasSpecialCharacter && hasDigit)
				return true;
		}
		return false;
	}
	
	private static boolean isDigit(char c) {
		return (c >= '0') && (c <= '9');
	}

	private static boolean isSpecialCharacter(char c) {
		return 	   c == '^' 
				|| c == '#'
				|| c == '$'
				|| c == '*'
				|| c == '.'
				|| c == '!'
				|| c == '&'
				|| c == '@';
	}
	
	private ValidationUtils() {
		throw new AssertionError("No instace of this class ever!");
	}
	
}
