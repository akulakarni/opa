'use strict';

angular.module('opa.register').config(function($stateProvider) {
	$stateProvider.state('register', {
		url : '/register',
		component : 'register'
	});
});
