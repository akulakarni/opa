angular.module('opa.buyer.active-bids').config(function($stateProvider) {
	$stateProvider.state('my-active-bids',{
		url:'/my-active-bids',
		component:'activeBids'
	});
});