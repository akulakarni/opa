'use strict';

angular.module('opa.buyer.make-bid').config(function($stateProvider) {
	$stateProvider.state('make-a-bid',{
		url:'/make-a-bid?prodId',
		component:'makeBid',
		params: {
			nameSearch: null,
			typeSearch: null
		},
		resolve: {
			 
		}
	});
});