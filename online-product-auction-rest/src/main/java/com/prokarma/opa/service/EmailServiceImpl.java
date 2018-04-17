package com.prokarma.opa.service;

import javax.mail.MessagingException;
import javax.mail.Multipart;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMailMessage;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import com.prokarma.opa.exception.EmailException;
import com.prokarma.opa.repository.model.UserDto;

@Service
public class EmailServiceImpl implements EmailService {

	private static final String FORGOT_PASSWORD_EMAIL_SUBJECT = "RESET OPA ACCOUNT PASSWORD";

	private static final String FRONTEND_DOMAIN = "localhost:9090/#";

	private final JavaMailSender javaMailSender;

	@Autowired
	public EmailServiceImpl(JavaMailSender javaMailSender) {
		this.javaMailSender = javaMailSender;
	}

	@Override
	public void sendForgotPasswordEmail(UserDto userDto) {
		try {
			MimeMessage mail = javaMailSender.createMimeMessage();
			MimeMessageHelper helper = new MimeMessageHelper(mail, false, "utf-8");
			helper.setTo(userDto.getEmail());
			mail.setContent(getForgotPasswordMessage(userDto), "text/html");
			helper.setSubject(FORGOT_PASSWORD_EMAIL_SUBJECT);
			javaMailSender.send(mail);
		} catch (MessagingException e) {
			throw new EmailException();
		}
	}

	private String getForgotPasswordMessage(UserDto userDto) {
		String passwordResetLink = getPasswordResetLink(userDto);
		StringBuilder forgotPasswordMessage = new StringBuilder();
		forgotPasswordMessage.append("Hi ");
		forgotPasswordMessage.append(userDto.getName());
		forgotPasswordMessage.append(", <br />");
		forgotPasswordMessage.append("&nbsp; &nbsp; Thank you for your request to reset your password. ");
		forgotPasswordMessage.append("Here is the link for the same. Please click on the link to reset the password.");
		forgotPasswordMessage.append(" Please do not share this link with anyone.");
		forgotPasswordMessage.append("<br /> <br />");
		forgotPasswordMessage.append("<a href=\"");
		forgotPasswordMessage.append(passwordResetLink);
		forgotPasswordMessage.append("\">");
		forgotPasswordMessage.append(passwordResetLink);
		forgotPasswordMessage.append("</a>");
		forgotPasswordMessage.append("<br /> <br />");
		forgotPasswordMessage.append("This link will expire in 5 hours from now.");
		forgotPasswordMessage.append("<br /><br />");
		forgotPasswordMessage.append("Thanks and regards.");
		forgotPasswordMessage.append("<br />");
		forgotPasswordMessage.append("OPA team.");
		return forgotPasswordMessage.toString();
	}

	private String getPasswordResetLink(UserDto userDto) {
		StringBuilder resetLink = new StringBuilder();
		resetLink.append("http://");
		resetLink.append(FRONTEND_DOMAIN);
		resetLink.append("/reset-password");
		resetLink.append("?email=");
		resetLink.append(userDto.getEmail());
		resetLink.append("&token=");
		resetLink.append(userDto.getToken());
		return resetLink.toString();
	}

}
