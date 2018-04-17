'use strict';

angular.module('opa.buyer.product-details')
.component('productDetails', {
	templateUrl:'scripts/buyer/product-details/product-details.html',
	controller: 'ProductDetailsController',
    controllerAs: 'productDetails',
    bindings: {
        mode: '@',
        productId: '<',
        cancelBid: '&',
        showCancel: '<'
    }
    
});