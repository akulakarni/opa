'use strict';

angular.module('opa.login').config(function($stateProvider) {
	$stateProvider.state('login', {
		url : '/login',
		component : 'login'
	});
});
