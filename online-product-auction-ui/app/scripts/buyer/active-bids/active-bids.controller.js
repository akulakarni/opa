angular.module('opa.buyer.active-bids')
    .controller('activeBidsController', ['$base64', 'BidsService','OpaAlertService',

function($base64, BidsService,OpaAlertService) {
    	
    	 OpaAlertService.clear();
    
    this.activeBids = [];
    this.nameSearch = '';
    this.typeSearch = '';

    this.getActiveBids = function() {
        BidsService.getActiveBids().then(
            function successCallback(response) {
                OpaAlertService.clear();
                this.activeBids = response.data;
                this.activeBids.forEach( function(bid) {
                	var decoded = $base64.decode(bid.image);
                    bid.image = decoded.replace(/"/g, '');
                });
                if(this.activeBids.length === 0) {
                    OpaAlertService.warnings("No active bids to display!");
                }                
                console.log(this.activeBids);
            }.bind(this)
        );
    }

    this.getActiveBids();
}]);