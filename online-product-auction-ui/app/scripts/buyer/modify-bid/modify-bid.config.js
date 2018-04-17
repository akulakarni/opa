'use strict';

angular.module('opa.buyer.modify-bid').config(function($stateProvider) {
	$stateProvider.state('modify-bid', {
		url:'/modify-bid?prodId',
		component:'modifyBid',
		params: {
			nameSearch: null,
			typeSearch: null
		}
	});
});