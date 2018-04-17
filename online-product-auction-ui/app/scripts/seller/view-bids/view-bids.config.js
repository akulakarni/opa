'use strict';

angular.module('opa.seller.view-bids').config(function($stateProvider) {
	$stateProvider.state('view-all-bids', {
		url : '/view-all-bids?productId',
		component : 'viewBids'
	});
});
