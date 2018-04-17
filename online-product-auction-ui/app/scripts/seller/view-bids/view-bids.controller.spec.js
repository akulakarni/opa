'use strict';

describe('Controller:viewBidsCtrl ', function(){

	beforeEach(module('opa'));
	beforeEach(module('opa.seller.view-bids'));
	
	var ViewBidsCtrl;
	
	beforeEach(inject(function($controller, BidsService, $state, $stateParams, $cookies, $base64, CONSTANTS, OpaAlertService){
		
		ViewBidsCtrl = $controller('viewBidsCtrl',{
			BidsService: BidsService,
			$state: $state,
			$stateParams: $stateParams,
			$cookies: $cookies,
			$base64: $base64,
			CONSTANTS: CONSTANTS,
			OpaAlertService: OpaAlertService
		});		
	}));
	
	it('should exists', function(){
		expect(ViewBidsCtrl).toBeDefined();
	});	
});