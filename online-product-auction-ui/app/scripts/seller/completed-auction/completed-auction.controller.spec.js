'use strict';

describe('Controller:CompletedAuctionCtrl', function () {
	
	beforeEach(module('opa'));
	beforeEach(module('opa.seller.completed-auction'));
		
	var CompletedAuctionsCtrl, scope;
	
	beforeEach(inject(function ($componentController, $rootScope, AuctionService, OpaAlertService){
		
		scope = $rootScope.$new();
		
		CompletedAuctionsCtrl = $componentController('completedAuction', {
		    $scope: scope,
			AuctionService:AuctionService,
			OpaAlertService:OpaAlertService
		});	
	}));
	
	it('should exists', function() {
		expect(CompletedAuctionsCtrl).toBeDefined();
	});
});
