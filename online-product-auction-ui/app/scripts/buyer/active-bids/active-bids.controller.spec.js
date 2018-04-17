'use strict';

describe('Controller: completedBidsCtrl', function () {

  // load the controller's module
  beforeEach(module('opa'));
  beforeEach(module('opa.buyer.active-bids'));

  var activeBidsController,
  scope;
   

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope,$base64, BidsService,OpaAlertService) {
	  scope = $rootScope.$new();
	  activeBidsController = $componentController('activeBids', {
		  $scope : scope,
		  $base64: $base64,
    	BidsService: BidsService,
      OpaAlertService: OpaAlertService
    });
  }));

  it('to check whether ActiveBids controller is defined', function () {
    expect(activeBidsController).toBeDefined();
  });
});
