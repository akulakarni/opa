'use strict';

describe('Service: AuctionService', function () {

  // load the service's module
  beforeEach(module('opa'));
  beforeEach(module('common.services'));

  var AuctionService, httpBackend, CONSTANTS;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($httpBackend,_AuctionService_, _CONSTANTS_, _$cookies_) {
	  AuctionService = _AuctionService_;
	  CONSTANTS = _CONSTANTS_;
	  httpBackend = $httpBackend;
  }));
  
  //make sure no expectations were missed in your tests.
  afterEach(function () {
      httpBackend.verifyNoOutstandingExpectation();
      httpBackend.verifyNoOutstandingRequest();
  });

  it('to check whether AuctionService is defined', function () {
	  expect(AuctionService).toBeDefined();
  });

  it('to check createAuction', function () {
	  var data = {};
	  var expectedResult = {name: 'test', type: 'test', price: 1234};
	  
	  httpBackend.expectPOST(CONSTANTS.SERVICE_URL_BASE + '/auction/create-auction', data).respond(expectedResult);
	  
	  var returnedPromise = AuctionService.createAuction(data);
      var result;
      returnedPromise.then(function (response) {
          result = response.data;
      });

      httpBackend.flush(); //flush the backend to "execute" the request to do the expectedGET assertion.
      
      expect(result).toEqual(expectedResult);
  });
  
  
  
  
});
