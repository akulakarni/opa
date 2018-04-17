'use strict';

angular.module('opa.buyer.my-completed-bids').config(function($stateProvider) {
	$stateProvider.state('my-completed-bids',{
		url:'/my-completed-bids',
		component:'myCompletedBids'
	});
});