
angular.module('common.services').factory('UserService',['$http', 'CONSTANTS', '$cookies', function($http, CONSTANTS, $cookies) {
    return {
        authenticate: function(data) {
        	
        	var promise = $http.post(CONSTANTS.SERVICE_URL_BASE + '/user/authenticate',data);
        	
        	promise.then(function sucesscallback(response){
        		return response.data;
        	},
        	function faliurecallback(errors){
        		return errors.data;
        	});
        	return promise;
        },
		register : function(data) {
			
			var promise = $http.post(CONSTANTS.SERVICE_URL_BASE
					+ '/user/register', data);

			promise.then(function success(response) {

				return response.data;

			}, function error(errors) {
				return errors.data;

			});

			return promise;
		},		
		logout : function() {
			var config = {headers : {'X-Access-Token': $cookies.get('opa.token')}};
			var url = CONSTANTS.SERVICE_URL_BASE + '/user-logout';
			var promise = $http.post(url, null, config);
			promise.then(function(response) { return response.data});
			return promise;
		},
		
		forgotPassword : function(email) {
			var url = CONSTANTS.SERVICE_URL_BASE + '/user/forgot-password';
			var promise = $http({
				url: url,
				method: 'POST',
				headers: {'Content-Type': 'application/x-www-form-urlencoded'},
				params: { email: email }
			});
			return promise;
		},
		
		isValidResetPasswordRequest: function(email, token) {
			let url = CONSTANTS.SERVICE_URL_BASE + '/user/validate-password-reset-request';
			let promise = $http({
				url: url + '?email=' + email + '&tkn=' + token,
				method: 'GET'
			});
			return promise;
		},
		
		resetPassword: function(email, token, password) {
			var url = CONSTANTS.SERVICE_URL_BASE + '/user/reset-password';
			var promise = $http({
				url: url,
				method: 'PUT',
				data: { email: email, token: token, password: password }
			});
			return promise;
		}
    };
}]);
				

