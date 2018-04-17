angular.module('common.services').factory('AuctionService',['$http', 'CONSTANTS', '$cookies', function($http, CONSTANTS, $cookies) {
    return {
        createAuction: function(data) {
        	var promise = $http({
        	    method: 'POST',
        	    url: CONSTANTS.SERVICE_URL_BASE + '/auction/create-auction',
        	    data: data,
        	    headers: {
        	        "Content-Type": "application/json",
        	        'X-Access-Token': $cookies.get('opa.token'),
        	        'Accept': "application/json"
        	    }
        	})
        	promise.then(function(response) {return response.data });
        	
        	return promise;
        },
        
        CompletedAuction: function(){
        	var promise =$http({
        		method: 'GET',
        		url: CONSTANTS.SERVICE_URL_BASE + '/auction/completed-auction',
        		
        		headers: {
        			 "Content-Type": "application/json",
         	        'X-Access-Token': $cookies.get('opa.token'),
         	        'Accept': "application/json"
        			
        		}
        	})
        	promise.then(function(response) {return response.data});
        	
        	return promise;
        },
		
        viewProductAuctions : function(data) {
			var config = {headers : {'X-Access-Token': $cookies.get('opa.token')}};
			var promise = $http.get(CONSTANTS.SERVICE_URL_BASE + '/auction/view-auctions?name='+data.name+'&type='+data.type, config);

			promise.then(function(response) { return response.data});
			return promise;
		},
		activeAuctions : function() {
			var config = {headers : {'X-Access-Token': $cookies.get('opa.token')}};

			var promise = $http.get(CONSTANTS.SERVICE_URL_BASE + '/auction/active-auctions', config);
			promise.then(function(response) {console.log(response.data); return response.data});
			return promise;
		},
		getAuctionByIdWithMaximumBid: function(productId) {
			var config = {headers : {'X-Access-Token': $cookies.get('opa.token')}};
			var promise = $http.get(CONSTANTS.SERVICE_URL_BASE + '/auction/get-auction-max-bid/'+productId, config);
			promise.then(
				function successCallback(response) {console.log(response.data);},
				function faliureCallback(response) {console.log(response);}
			);

			return promise;
		}
    };
}]);
