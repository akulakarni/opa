'use strict';


angular.module('opa.home')

.controller('HomeCtrl', [ '$cookies','OpaAlertService', function ( $cookies,OpaAlertService) {

    OpaAlertService.clear();

	this.name=$cookies.get('opa.name');
	
	
}]);

