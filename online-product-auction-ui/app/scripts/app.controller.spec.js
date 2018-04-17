'use strict';

describe('Controller : appCtrl', function() {

	// load the controller's module
	beforeEach(module('opa'));
	beforeEach(module('opa.login'));

	var appCtrl, scope;

	// Initialize the controller and a mock scope
	beforeEach(inject(function($controller, $rootScope, $cookies) {
		scope = $rootScope.$new();
		appCtrl = $controller('appCtrl', {
			$scope: scope,
			$cookies: $cookies
		});
	}));
	
	it('should exist', function() {
		expect(appCtrl).toBeDefined();
	});
});