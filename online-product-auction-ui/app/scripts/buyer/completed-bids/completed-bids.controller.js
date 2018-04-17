'use strict';

angular.module('opa.buyer.my-completed-bids')
.controller('completedBidsCtrl',['BidsService','OpaAlertService',function(BidsService,OpaAlertService) {
       console.log("viewcontroller");
		//this.details = [];
       OpaAlertService.clear();
        console.log('completedBidsCtrl');
        BidsService.myCompletedBids()
        .then(
            function success(response) {
            	this.details = response.data;
            	if(this.details.length === 0) {
	            	 OpaAlertService.warnings("No Completed Bids to Display!!")
            	}
            }.bind(this),
            function error(errors) {
               console.log("no data");
               OpaAlertService.error(errors.data.errors[0].message);
			}.bind(this));
}]);