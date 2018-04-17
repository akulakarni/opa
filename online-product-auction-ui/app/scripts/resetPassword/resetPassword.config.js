'use strict';

angular.module('opa.resetPassword').config(function($stateProvider) {
	$stateProvider.state('reset-password', {
		url : '/reset-password?email&token',
		component : 'resetPassword',
		resolve: {
			isValidRequest: function($q, $stateParams, UserService, OpaAlertService) {
				let request = $q.defer();
				OpaAlertService.clear();
				
				UserService.isValidResetPasswordRequest($stateParams['email'], $stateParams['token']).then(
					function successCallback(response) {
						request.resolve();
					},
					function failureCallback(response) {
						console.log(response);
						if(response.status === 408) {
							OpaAlertService.error('The link sent to you has expired. Please try again.');
						} else if(response.status === 401) {
							OpaAlertService.error('Invalid link entered.');
						} else {
							OpaAlertService.error('Something went wrong. Please try again later...');
						}
						request.reject();
					}
				);
				return request.promise;
			}
		}
	});
});
