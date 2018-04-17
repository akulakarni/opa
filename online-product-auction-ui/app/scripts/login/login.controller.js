'use strict';

angular.module('opa.login')

.controller('LoginCtrl', ['UserService','$state','$rootScope', '$cookies','CONSTANTS','OpaAlertService', function (UserService, $state, $rootScope, $cookies, CONSTANTS,OpaAlertService) {
	
	this.submitLogin = function () {
		console.log('In Submit..');
		OpaAlertService.clear();
		UserService.authenticate(this.data).then(function success(response) {
			console.log(response);
			$cookies.put('opa.name', response.data.name);
			$cookies.put('opa.token', response.data.token);
			$rootScope.$emit('loginEvent', true);
			console.log($cookies.get('opa.token'));
			console.log("Redirecting to Home...");
			$state.go('home');
		}.bind(this), 
		function error(errors) {
			console.log(errors);
			if(errors.status === 401) {
				OpaAlertService.error("Incorrect email and/or password");
			} else {
				OpaAlertService.error("Something went wrong! Please try again later...");
			}
		});
	};
}]);
