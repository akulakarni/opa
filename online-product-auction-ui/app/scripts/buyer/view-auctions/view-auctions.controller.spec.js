'use strict';

describe('Controller: ViewAuctionsCtrl', function() {

	// load the controller's module
	beforeEach(module('opa'));
	beforeEach(module('opa.buyer.view-auctions'));

	var ViewAuctionsCtrl, scope;
	var scope;

	// Initialize the controller and a mock scope
	beforeEach(inject(function($componentController, $rootScope, _$stateParams_, _AuctionService_, _OpaAlertService_, _$base64_, _CONSTANTS_) {
		scope = $rootScope.$new();
		ViewAuctionsCtrl = $componentController('viewAuctions', {
			$scope :scope,
			$stateParams : _$stateParams_,
			OpaAlertService : _OpaAlertService_,
			AuctionService : _AuctionService_,
			$base64 : _$base64_,
			CONSTANTS : _CONSTANTS_
		});
	}));

	it('to check whether ViewyAuctions controller is defined', function() {
		expect(ViewAuctionsCtrl).toBeDefined();
	});
});
