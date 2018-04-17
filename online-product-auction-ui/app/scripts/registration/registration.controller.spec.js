'use strict';

describe('Controller: RegisterCtrl', function() {

	// load the controller's module
	beforeEach(module('opa'));
	beforeEach(module('opa.register'));

	var RegisterCtrl;

	// Initialize the controller and a mock scope
	beforeEach(inject(function($componentController,UserService, $state, OpaAlertService) {
		RegisterCtrl = $componentController('register', {
			UserService : UserService,
			$state : $state,
			OpaAlertService : OpaAlertService
		});
	}));

	it('to check whether Registration controller is defined', function() {
		expect(RegisterCtrl).toBeDefined();
	});
});
