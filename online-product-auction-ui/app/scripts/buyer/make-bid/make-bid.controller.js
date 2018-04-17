'use strict';

angular.module('opa.buyer.make-bid').controller('MakeBidController', ['$state', '$stateParams', '$base64', 'BidsService', 'AuctionService', 'OpaAlertService',
function($state, $stateParams, $base64, BidsService, AuctionService, OpaAlertService) {
    this.productId = $stateParams['prodId'];
    OpaAlertService.clear();

    this.cancelBid = function() {
        if($stateParams['nameSearch'] !== null) {
            $state.go('view-auctions', {nameSearch: $stateParams['nameSearch'], typeSearch: $stateParams['typeSearch']});
        }
    }

    this.showCancel = $stateParams['nameSearch'] !== null;
    
}]);