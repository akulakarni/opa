'use strict';

describe('Controller: LoginCtrl', function () {

  // load the controller's module
  beforeEach(module('opa'));
  beforeEach(module('opa.login'));

  var LoginCtrl, UserService, scope, $state, OpaAlertService;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope, _UserService_, _$state_, _$cookies_, _CONSTANTS_, _OpaAlertService_) {
    scope = $rootScope.$new();
    UserService = _UserService_;
    OpaAlertService = _OpaAlertService_;
    $state = _$state_;
    LoginCtrl = $componentController('login', {
      $scope: scope,
      UserService: UserService,
      $state: $state,
      $cookies: _$cookies_,
      CONSTANTS: _CONSTANTS_,
      OpaAlertService: OpaAlertService,
    });
  }));


  it('to check whether Login controller is defined', function () {
    expect(LoginCtrl).toBeDefined();
  });

  describe('method: submitLogin ', function () {
	  it('should redirect To home if user is valid', function () {
		  LoginCtrl.data = {email: 'test@gmail.com', password: 'test'};
		  spyOn(UserService, 'authenticate').and.callFake(function() {
		  	return {
		  	    then: function success(successFn) {
		  	      return successFn({data: {name: 'test', token: 'test'}});
		  	    }
		  	  };
		  });
		  spyOn($state, 'go');
		  
		  LoginCtrl.submitLogin();
		  
		  expect(UserService.authenticate).toHaveBeenCalled();
		  expect($state.go).toHaveBeenCalled();
	  });
	  
	  it('should not redirect To home if user is not valid and Show error', function () {
		  LoginCtrl.data = {email: 'test@gmail.com', password: 'test'};
		  
		  spyOn(UserService, 'authenticate').and.callFake( function() {
			  return {
				  then: function success(successFn, ErrFn) {
					  ErrFn({status: 401});
				  }					
			  };
		  });
		  
		  spyOn($state, 'go');
		  spyOn(OpaAlertService, 'error');
		  
		  LoginCtrl.submitLogin();
		  
		  expect(UserService.authenticate).toHaveBeenCalled();
		  expect($state.go).not.toHaveBeenCalled();
		  expect(OpaAlertService.error).toHaveBeenCalledWith("Incorrect email and/or password");
	  });
	  
	  it('should not redirect To home if Something went wrong', function () {
		  LoginCtrl.data = {email: 'test@gmail.com', password: 'test'};
		  
		  spyOn(UserService, 'authenticate').and.callFake( function() {
			  return {
				  then: function success(successFn, ErrFn) {
					  ErrFn({status: 500});
				  }					
			  };
		  });
		  
		  spyOn($state, 'go');
		  spyOn(OpaAlertService, 'error');
		  
		  LoginCtrl.submitLogin();
		  
		  expect(UserService.authenticate).toHaveBeenCalled();
		  expect($state.go).not.toHaveBeenCalled();
		  expect(OpaAlertService.error).toHaveBeenCalledWith("Something went wrong! Please try again later...");
	  });
	});
});
