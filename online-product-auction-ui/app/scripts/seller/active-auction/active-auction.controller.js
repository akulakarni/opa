angular.module('opa.seller.active-auctions')
.controller('ActiveAuctionsCtrl', ['$base64', 'AuctionService', 'OpaAlertService', '$stateParams','CONSTANTS',function ($base64, AuctionService, OpaAlertService, $stateParams,CONSTANTS) {
	
	 OpaAlertService.clear();
	
	this.productTypes=CONSTANTS.PRODUCT_TYPES;
	console.log("activectrl");
	console.log(this.products);
	this.data = {type: $stateParams.filterBy};

	this.$onInit = function() {
		if(this.products.length === 0) {
			OpaAlertService.warnings("No active auctions found!");
		}
		
		this.products.forEach(function(product) {
			var decoded = $base64.decode(product.image);
            product.image = decoded.replace(/"/g,'');
		});
	}
	
	/*console.log('ActiveAuctionsCtrl');
	AuctionService.activeAuctions().then(function success(response) {
		this.products=response.data;
		console.log(this.products);
	}.bind(this), 
	function error(errors) {
		console.log(errors);
		OpaAlertService.error(errors.data.errors[0].message);
	}.bind(this));*/
  }]);