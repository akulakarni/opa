'use strict';

describe('Controller:CreateAuctionCtrl',function(){

	beforeEach(module('opa'));
	beforeEach(module('opa.seller.create-auction'));
	
	var CreateAuctionCtrl;
	
	beforeEach(inject(function($controller, $cookies, AuctionService, OpaAlertService, $base64,CONSTANTS ){
		
		CreateAuctionCtrl = $controller('CreateAuctionCtrl',{
			$cookies: $cookies,
			AuctionService: AuctionService,
			OpaAlertService: OpaAlertService,
			$base64: $base64,
			CONSTANTS: CONSTANTS
		});		
	}));
	
	it('should exists',function(){
		expect(CreateAuctionCtrl).toBeTruthy();
	});
});
