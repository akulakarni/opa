package com.prokarma.opa.repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;
import com.prokarma.opa.repository.model.PasswordResetTokenDto;

@Repository
public class PasswordResetTokenRepositoryImpl implements PasswordResetTokenRepository {

	private static final String CREATE_PASSWORD_RESET_TOKEN = "insert into opa.password_reset_token (email,token, expiration) values (:email,:token, SYSDATE + 5 / 24)";
	private static final String FIND_BY_EMAIL_AND_TOKEN_SQL = "SELECT email, token, expiration FROM opa.password_reset_token WHERE email=:email AND token=:token";
	private static final String DELETE_BY_EMAIL_AND_TOKEN_SQL = "DELETE opa.password_reset_token WHERE email=:email AND token=:token";
	
	private final NamedParameterJdbcTemplate jdbcTemplate;

	@Autowired
	public PasswordResetTokenRepositoryImpl(NamedParameterJdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}

	@Override
	public String createPasswordResetToken(String email) {
		String token = UUID.randomUUID().toString();
		MapSqlParameterSource mapSqlParameterSource = new MapSqlParameterSource();
		mapSqlParameterSource.addValue("email", email);
		mapSqlParameterSource.addValue("token", token);
		jdbcTemplate.update(CREATE_PASSWORD_RESET_TOKEN, mapSqlParameterSource);
		return token;
	}

	@Override
	public PasswordResetTokenDto findByEmailAndToken(String email, String token) {	
		MapSqlParameterSource mapSqlParameterSource=new MapSqlParameterSource();
		mapSqlParameterSource.addValue("email",email);
		mapSqlParameterSource.addValue("token",token);
		return jdbcTemplate.query(FIND_BY_EMAIL_AND_TOKEN_SQL, mapSqlParameterSource, new ResultSetExtractor<PasswordResetTokenDto>() {

			@Override
			public PasswordResetTokenDto extractData(ResultSet resultSet) throws SQLException, DataAccessException {
				if(resultSet.next()) {
					PasswordResetTokenDto passwordResetTokenDto=new PasswordResetTokenDto();
					passwordResetTokenDto.setEmail(resultSet.getString("email"));
					passwordResetTokenDto.setToken(resultSet.getString("token"));
					passwordResetTokenDto.setExpiration(resultSet.getDate("expiration"));
					return passwordResetTokenDto;
				}						
			     return null;
			}	
		});	
	}

	@Override
	public void deleteToken(PasswordResetTokenDto passwordResetTokenDto) {
		MapSqlParameterSource mapSqlParameterSource=new MapSqlParameterSource();
		mapSqlParameterSource.addValue("email",passwordResetTokenDto.getEmail());
		mapSqlParameterSource.addValue("token", passwordResetTokenDto.getToken());
		jdbcTemplate.update(DELETE_BY_EMAIL_AND_TOKEN_SQL, mapSqlParameterSource);
	}

}
