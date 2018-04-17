'use strict';

describe('Service: UserService', function () {

  // load the service's module
  beforeEach(module('opa'));
  beforeEach(module('common.services'));

  var UserService, httpBackend, CONSTANTS;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($httpBackend, _UserService_, _CONSTANTS_, _$cookies_) {
	  UserService = _UserService_;
	  CONSTANTS = _CONSTANTS_;
	  httpBackend = $httpBackend;
  }));
  
  //make sure no expectations were missed in your tests.
  afterEach(function () {
      httpBackend.verifyNoOutstandingExpectation();
      httpBackend.verifyNoOutstandingRequest();
  });

  it('to check whether UserService is defined', function () {
	  expect(UserService).toBeDefined();
  });

  it('to check authenticate', function () {
	  var data = {};
	  var expectedResult = {name: 'test', token: 'test'};
	  
	  httpBackend.expectPOST(CONSTANTS.SERVICE_URL_BASE + '/user/authenticate', data).respond(expectedResult);
	  
	  var returnedPromise = UserService.authenticate(data);
      var result;
      returnedPromise.then(function (response) {
          result = response.data;
      });

      httpBackend.flush(); //flush the backend to "execute" the request to do the expectedGET assertion.
      
      expect(result).toEqual(expectedResult);
  });
  
  it('to check register', function () {
	  var data = {};
	  var expectedResult = {name: 'test', email: 'test@gmail.com'};
	  
	  httpBackend.expectPOST(CONSTANTS.SERVICE_URL_BASE + '/user/register', data).respond(expectedResult);
	  
	  var returnedPromise = UserService.register(data);
      var result;
      returnedPromise.then(function (response) {
          result = response.data;
      });

      httpBackend.flush(); //flush the backend to "execute" the request to do the expectedGET assertion.
      
      expect(result).toEqual(expectedResult);
  });
  
  
});
