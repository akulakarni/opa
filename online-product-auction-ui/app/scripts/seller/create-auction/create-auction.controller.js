
angular.module('opa.seller.create-auction')
.controller('CreateAuctionCtrl', [ '$cookies', 'AuctionService', 'OpaAlertService', '$base64','CONSTANTS', function ( $cookies, AuctionService, OpaAlertService, $base64,CONSTANTS ) {
   
	 OpaAlertService.clear();
	this.productTypes=CONSTANTS.PRODUCT_TYPES;
    this.currentDate=new Date();

    this.data = {};
    this.uploadedFile="";
   // this.email = $cookies.getObject("opa.data").email;
   // console.log(this.email);
    
    this.getByteArray = function() {
    	var splitString = this.uploadedFile.split(',');
    	this.data.image = $base64.encode(JSON.stringify(splitString[1]));
    	return splitString[1];
    }

    this.addAuction = function() {
		console.log("Adding auctions");
    	AuctionService.createAuction(this.data)
    	.then(function success(response) {
			console.log(response);
			OpaAlertService.success('successfully Created Auction ');
			
			this.data={};
			this.uploadedFile="";
		}.bind(this), 
		function error(errors) {
			console.log(errors);
			OpaAlertService.error('Something went wrong. Please try again later');
		}.bind(this));
	}
    
    this.resetForm=function() {
    	 this.data = {};
    	    this.uploadedFile="";
    	
    }
	
    
    
}]);