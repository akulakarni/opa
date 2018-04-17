'use strict';

angular.module('opa.home').config(function($stateProvider) {
	$stateProvider.state('home', {
		url: '/home',
		component: 'home'
	});
});