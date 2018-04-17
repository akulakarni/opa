'use strict';

angular.module('opa.buyer.view-auctions').config(function($stateProvider) {
	$stateProvider.state('view-auctions', {
		url : '/view-auctions',
		component : 'viewAuctions',
		params: {
			nameSearch: null, 
			typeSearch: null
		}
	});
});