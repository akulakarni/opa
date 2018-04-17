'use strict';

angular.module('opa.seller.view-bids')

.controller('viewBidsCtrl', ['BidsService','$state', '$stateParams', '$cookies', '$base64', 'CONSTANTS', 'OpaAlertService',
	function (BidsService, $state, $stateParams, $cookies, $base64, CONSTANTS,OpaAlertService) {
	
	 OpaAlertService.clear();

	
	this.$onInit = function(){
	console.log('In viewBids controller..');
	//OpaAlertService.clear();
	
	this.productId = $stateParams['productId'];
		console.log('In getBids..');
		
		BidsService.getAllBids(this.productId)
		.then(function success(response) {
			this.productDetails = response.data;
			console.log(this.productDetails);
			var decoded = $base64.decode(this.productDetails.image);
           	this.productDetails.image = decoded.replace(/"/g,'');
			
		}.bind(this), 
		
		function error(errors) {
			
			console.log(errors.data);
			
		});
	}
}]);
