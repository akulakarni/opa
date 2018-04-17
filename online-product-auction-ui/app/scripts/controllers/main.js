'use strict';

/**
 * @ngdoc function
 * @name opa.controller:MainCtrl
 * @description # MainCtrl Controller of the opa
 */
angular.module('opa.home1',[])
	.component('home1', {
		templateUrl: 'scripts/controllers/main.html',
		controller: 'MainCtrl',
		controllerAs: 'main'
	})
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })
  .config(function($stateProvider) {
		$stateProvider.state('home1', {
			url : '/',
			component : 'home1'
		});
  });
