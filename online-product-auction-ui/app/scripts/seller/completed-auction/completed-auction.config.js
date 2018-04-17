angular.module('opa.seller.completed-auction').config(function($stateProvider) {
	$stateProvider.state('my-completed-auctions',{
		url:'/my-completed-auctions',
		component:'completedAuction'
	});
});