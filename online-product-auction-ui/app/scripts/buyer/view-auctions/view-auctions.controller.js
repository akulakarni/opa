'use strict';

angular.module('opa.buyer.view-auctions')
.controller('ViewAuctionsCtrl',['$stateParams', 'AuctionService','OpaAlertService', '$base64', 'CONSTANTS','$scope',function($stateParams, AuctionService, OpaAlertService, $base64,CONSTANTS,$scope ) {
	   console.log("viewcontroller");
	   console.log($scope);

	   OpaAlertService.clear();

	   this.productTypes = CONSTANTS.PRODUCT_TYPES;
	   this.form = {};

	   this.data = {
			name: $stateParams['nameSearch'],
			type: $stateParams['typeSearch']
	   };

	   this.searchData = {
			name: $stateParams['nameSearch'],
			type: $stateParams['typeSearch']
	   };

       this.isRequiredFeild = function() {
    	   if(this.data.name === null && this.data.type === null){
    		   return true;
    	   } else if(this.data.name === '' && this.data.type === '') {
    		   return true;
    	   }
    	   return false;
       };
       
		this.auctions = function() {
			
			this.searchData.name=this.data.name;
			this.searchData.type=this.data.type;
			
			
			if(this.form.$valid){
			if(this.data.name === undefined) {
				this.data.name='';
			}
			if(this.data.type === undefined) {
				this.data.type='';
			}
	        console.log('ViewAuctionsCtrl');
	        AuctionService.viewProductAuctions(this.data)
	        .then(
	            function success(response) {
		             this.products = response.data;
		             if(this.products.length === 0) {
		            	 OpaAlertService.clear();
		            	 OpaAlertService.warnings("No Products to Display!!");
		            	 
		             } else{
			             angular.forEach(this.products, function(value, key) {
			            	var decoded = $base64.decode(value.image);
			             	value.image = decoded.replace(/"/g,'');
			             });
	            	 }
		             console.log(response.data);
	            }.bind(this),
	            function error(errors) {
	               console.log("no data");
	               OpaAlertService.error(errors.data.errors[0].message);
				}.bind(this));
			} else {
				OpaAlertService.warnings(" Enter Atleast One Feild..")
			}
        };
        
        if(this.searchData.name !== null) {
        	this.auctions();
        }
       
}]);