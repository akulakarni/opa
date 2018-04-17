angular.module('opa.seller.active-auctions').config(function($stateProvider) {
	$stateProvider.state('my-active-auctions',{
		url:'/my-active-auctions',
		component:'activeAuctions',
		params: {filterBy: ''},
		resolve: {
			products: function (AuctionService, OpaAlertService) {
				
				return AuctionService.activeAuctions().then(function success(response) {
					return response.data;
				},
				function error(errors) {
					console.log(errors);
					OpaAlertService.error(errors.data.errors[0].message);
				});
			}
		}
	});
});