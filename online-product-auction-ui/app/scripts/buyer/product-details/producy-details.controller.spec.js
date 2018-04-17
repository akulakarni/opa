'use strict';

describe('Controller: ModifyBidController', function () {

  // load the controller's module
  beforeEach(module('opa'));
  beforeEach(module('opa.buyer.product-details'));

  var ProductDetailsController,
  scope;
   

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController,$rootScope, $base64, BidsService, AuctionService, OpaAlertService) {
	  scope = $rootScope.$new();
	  ProductDetailsController = $componentController('productDetails', {
		  $scope : scope,
		  $base64: $base64,
		  AuctionService: AuctionService,
    	  BidsService: BidsService,
          OpaAlertService: OpaAlertService
    });
  }));

  it('to check whether ProductDetails controller is defined', function () {
    expect(ProductDetailsController).toBeDefined();
  });
});
