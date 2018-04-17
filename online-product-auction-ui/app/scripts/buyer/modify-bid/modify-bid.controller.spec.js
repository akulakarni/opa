'use strict';

describe('Controller: ModifyBidController', function () {

  // load the controller's module
  beforeEach(module('opa'));
  beforeEach(module('opa.buyer.modify-bid'));

  var ModifyBidController,
  scope;
   

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope,$state, $stateParams, $base64, BidsService, AuctionService, OpaAlertService) {
	  scope = $rootScope.$new();
	  ModifyBidController = $componentController('modifyBid', {
		  $scope : scope,
		  $state: $state,
		  $stateParams: $stateParams,
		  $base64: $base64,
		  AuctionService: AuctionService,
    	  BidsService: BidsService,
          OpaAlertService: OpaAlertService
    });
  }));

  it('to check whether ModifyBid controller is defined', function () {
    expect(ModifyBidController).toBeDefined();
  });
});
