'use strict';

describe('Controller: ActiveAuctionsCtrl', function () {

  // load the controller's module
  beforeEach(module('opa'));
  beforeEach(module('opa.seller.active-auctions'));

  var ActiveAuctionsCtrl;
   

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller,$base64, AuctionService, OpaAlertService, $stateParams,CONSTANTS) {
    
    ActiveAuctionsCtrl = $controller('ActiveAuctionsCtrl', {
      $base64: $base64,
      AuctionService: AuctionService,
      $stateParams: $stateParams,
      CONSTANTS: CONSTANTS,
      OpaAlertService: OpaAlertService
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ActiveAuctionsCtrl).toBeDefined();
  });
});
