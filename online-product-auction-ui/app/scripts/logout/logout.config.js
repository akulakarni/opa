'use strict';

angular.module('opa.logout').config(function($stateProvider) {
	$stateProvider.state('logout',{
		url:'/logout',
	    onEnter: function(UserService, OpaAlertService, $cookies, $state, $rootScope) {
			console.log('Logging out');
			OpaAlertService.clear();
	        UserService.logout().then(function success(response) {  
				OpaAlertService.success(response.data.message);
				$cookies.remove('opa.token');
				$cookies.remove('opa.name');
				$rootScope.$emit('loginEvent', false);
				$state.go('login');
			}, 
			function error(errors) {
				console.log(errors);
				OpaAlertService.error(errors);
			});
	      }
	});
});