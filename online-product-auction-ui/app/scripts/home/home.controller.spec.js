'use strict';

describe('Controller: HomeCtrl', function() {

	// load the controller's module
	beforeEach(module('opa'));
	beforeEach(module('opa.home'));

	var HomeCtrl,scope;

	// Initialize the controller and a mock scope
	beforeEach(inject(function($componentController,$rootScope,$cookies,OpaAlertService) {
		 scope = $rootScope.$new();
		HomeCtrl = $componentController('home', {
			$scope : scope,
			$cookies : $cookies,
			OpaAlertService : OpaAlertService
		});
	}));

	it('to check whether Home controller is defined', function() {
		expect(HomeCtrl).toBeDefined();
	});
});
