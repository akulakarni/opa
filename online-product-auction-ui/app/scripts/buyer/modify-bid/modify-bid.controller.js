'use strict';

angular.module('opa.buyer.modify-bid').controller('ModifyBidController', ['$state', '$stateParams', '$base64', 'BidsService', 'AuctionService', 'OpaAlertService',
function($state, $stateParams, $base64, BidsService, AuctionService, OpaAlertService) {
    this.productId = $stateParams['prodId'];
    OpaAlertService.clear();

    this.cancelBid = function() {
        $state.go('my-active-bids');
    };

    console.log($stateParams['nameSearch']);

    this.showCancel = $stateParams['nameSearch'] !== null;
    
}]);