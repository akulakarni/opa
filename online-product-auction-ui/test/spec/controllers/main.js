'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('opa'));
  beforeEach(angular.mock.module('opa.home1'));

  var controller,
    scope;

  // Initialize the controller and a mock scope
 
 
  
  beforeEach(angular.mock.inject(function($rootScope, $componentController){
	  scope = $rootScope.$new();
	  controller = $componentController('home1', {$scope: scope});
	}));
  
  it('controller exists', function(){
	expect(controller).toBeDefined();  
  });

  it('should attach a list of awesomeThings to the scope', function () {
    expect(controller.awesomeThings.length).toBe(3);
  });
});
