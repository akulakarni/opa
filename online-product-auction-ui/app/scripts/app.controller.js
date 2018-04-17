'use strict';

angular
  .module('opa')
  .controller('appCtrl',['$rootScope', '$cookies',function ($rootScope, $cookies) {
	  this.cookies = $cookies;
	  
	  this.isLoggedIn = false;
	  if(angular.isDefined($cookies.get('opa.token'))){
		  this.isLoggedIn = true;
	  }

	  
	  $rootScope.$on('loginEvent', function (event, value) {
		  this.isLoggedIn = value;
		  return this.isLoggedIn;
	  }.bind(this));
  }]);
