'use strict';

angular.module('opa.buyer.product-details').controller('ProductDetailsController', ['$base64', 'BidsService', 'AuctionService', 'OpaAlertService',
function( $base64, BidsService, AuctionService, OpaAlertService) {

    OpaAlertService.clear();

    this.$onInit = function() {
        
        this.auctionProduct = {
            product_id: parseInt(this.productId),
            name: '',
            price: 0,
            expiredate: '',
            image: null
        };

        this.bid = {
            productId: parseInt(this.productId),
            amount: this.auctionProduct.min_bid_amount
        };

        this.fetchProduct();
    };

    this.fetchProduct = function() {
        AuctionService.getAuctionByIdWithMaximumBid(this.productId).then(
            function successCallback(response) {
                this.auctionProduct = response.data;
                this.currentPrice = this.getCurrentAuctionPrice();
                this.bid.amount = this.currentPrice + 1;
                console.log(response);

                var decoded = $base64.decode(this.auctionProduct.image);
                this.productImage = decoded.replace(/"/g,'');
                //productDetails.auctionProduct
            }.bind(this)
        );
    };

    this.getCurrentAuctionPrice = function() {
    	var min_bid_amount = this.auctionProduct.price;
    	var max_bid = this.auctionProduct.bids[0].amount;
        return (max_bid != 0)?max_bid:min_bid_amount;
    };

    this.submitBid = function() {
        BidsService.createBid(this.bid).then(
            function successResponse(response) {
                OpaAlertService.clear();
                OpaAlertService.success(response.data.message);
                this.fetchProduct();
            }.bind(this),

            function failureResponse(response) {
                OpaAlertService.clear();
                if(response.status == 500) {
                    OpaAlertService.error("Something went wrong! Please try again later.");
                }
            }.bind(this)
        );
    };

    this.cancelBid = function() {
        console.log('cancelling bid');
        $state.go('view-auctions');
    };    

}]);