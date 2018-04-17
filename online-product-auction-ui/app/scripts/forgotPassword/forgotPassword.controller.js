'use strict';

angular.module('opa.forgotPassword')

.controller('ForgotPasswordCtrl', ['UserService', 'OpaAlertService', function (UserService, OpaAlertService) {
	
	OpaAlertService.clear();
	
	this.submitForgotPasswordForm = function () {
		console.log('In Submit..');
		OpaAlertService.clear();
		UserService.forgotPassword(this.data.email).then(function success(response) {
			console.log(response);
			OpaAlertService.success(response.data.message);
		}.bind(this), 
		function error(errors) {
			console.log(errors);
			if(errors.status === 404) {
				OpaAlertService.warnings("Email id does not exist...");
			} else {
				OpaAlertService.error("Something went wrong. Please try again later. ");
			}
		});
	};
}]);
