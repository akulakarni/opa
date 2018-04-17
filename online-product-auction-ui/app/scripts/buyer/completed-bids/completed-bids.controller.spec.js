'use strict';

describe('Controller: completedBidsCtrl', function () {

  // load the controller's module
  beforeEach(module('opa'));
  beforeEach(module('opa.buyer.my-completed-bids'));

  var completedBidsCtrl,
  scope;
   

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope, BidsService,OpaAlertService) {
	  scope = $rootScope.$new();
	  completedBidsCtrl = $componentController('myCompletedBids', {
		  $scope : scope,
    	BidsService: BidsService,
      OpaAlertService: OpaAlertService
    });
  }));

  it('to check whether CompletedBids controller is defined', function () {
    expect(completedBidsCtrl).toBeDefined();
  });
});
