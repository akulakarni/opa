'use strict';

angular.module('opa.forgotPassword').config(function($stateProvider) {
	$stateProvider.state('forgot-password', {
		url : '/forgot-password',
		component : 'forgotPassword'
	});
});
