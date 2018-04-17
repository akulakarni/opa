'use strict';

angular
  .module('opa')
  .config(function ($locationProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/login');
    $locationProvider.hashPrefix('');
  })
  .run(function ($transitions, $log, $cookies) {
	  //'ngInject';
	  $transitions.onStart({}, function (transition) {
	    $log.log('Started transition');
	    var toState = transition.$to();
	    var redirectRequired = true;
	    if(toState.name === "register" || toState.name === "login" || toState.name === "forgot-password" || toState.name === "reset-password"){
	    	redirectRequired = false;
	    }
	    if (angular.isUndefined($cookies.get('opa.token')) && redirectRequired) {
	      $log.error('AppCtrl - User Not Logged in!');
	      return transition.router.stateService.transitionTo('login');// stop current routing
	    }
	  });
  });
