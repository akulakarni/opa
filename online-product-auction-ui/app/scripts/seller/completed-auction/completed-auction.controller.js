angular.module('opa.seller.completed-auction')
.controller('CompletedAuctionCtrl', ['AuctionService','OpaAlertService',function(AuctionService, OpaAlertService){
	 OpaAlertService.clear();
	
	this.completedAuctions=[];
	
	AuctionService.CompletedAuction().then(function success(response){
		
		this.completedAuctions=response.data;
		if(this.completedAuctions.length === 0) {
       	 OpaAlertService.warnings("No Completed Bids to Display!!")
   	}
	}.bind(this),
	function error(errors) {
		console.log(errors);
		OpaAlertService.error('Something went wrong. Please try again later');
	}.bind(this));
}
]);