angular.module('opa.seller.active-auctions')
.component('activeAuctions',{
	bindings: {products: '='},
	templateUrl:'scripts/seller/active-auction/active-auction.html',
	controller:'ActiveAuctionsCtrl',
    controllerAs:'activeAuctions'
});