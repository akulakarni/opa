'use strict';

angular.module('opa.resetPassword')

.controller('ResetPasswordCtrl', ['$state', '$stateParams', 'UserService', 'OpaAlertService', function ($state, $stateParams, UserService, OpaAlertService) {
	
	OpaAlertService.clear();
	
	this.submitResetPasswordForm = function() {
		OpaAlertService.clear();
		console.log($stateParams['email']);
		console.log($stateParams['token']);
		UserService.resetPassword($stateParams['email'], $stateParams['token'], this.data.password).then(
			function successCallback(response) {
				OpaAlertService.success('Password reset successfully! ');
				$state.go('login');
			},
			
			function failureCallback(response) {
				OpaAlertService.error('Something went wrong! Please try again later...');
			}
		);
	};	
}]);
