angular.module('opa.seller.create-auction').config(function($stateProvider) {
	$stateProvider.state('create-auction',{
		url:'/create-auction',
		component:'createAuction'
	});
});