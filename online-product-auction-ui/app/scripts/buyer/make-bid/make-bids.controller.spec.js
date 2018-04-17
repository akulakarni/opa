'use strict';

describe('Controller: MakeBidController', function () {

  // load the controller's module
  beforeEach(module('opa'));
  beforeEach(module('opa.buyer.make-bid'));

  var MakeBidController,
  scope;
   

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope,$state, $stateParams, $base64, BidsService, AuctionService, OpaAlertService) {
	  scope = $rootScope.$new();
	  MakeBidController = $componentController('makeBid', {
		  $scope : scope,
		  $state: $state,
		  $stateParams: $stateParams,
		  $base64: $base64,
		  AuctionService: AuctionService,
    	  BidsService: BidsService,
          OpaAlertService: OpaAlertService
    });
  }));

  it('to check whether MakeBid controller is defined', function () {
    expect(MakeBidController).toBeDefined();
  });
});
