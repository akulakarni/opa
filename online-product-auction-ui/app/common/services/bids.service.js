angular.module('common.services').factory('BidsService',['$http', '$cookies', 'CONSTANTS', function($http, $cookies, CONSTANTS) {
    return {
       
    	getAllBids: function(productId) {
    		
    		var config = {headers : {'X-Access-Token': $cookies.get('opa.token')}};
        	
    		var promise = $http.get(CONSTANTS.SERVICE_URL_BASE + '/bid/view-all-bids?productId='+productId,config);

        	promise.then(function sucesscallback(response){
        		
        		return response.data;
        	},
        	
        	function faliurecallback(errors){
        		
        		return errors.data;
        	});
        	
        	return promise;
		},
		
		createBid: function(bid) {
			
			var promise = $http({
				method: 'POST',
				url: CONSTANTS.SERVICE_URL_BASE + '/bid/create-bid',
				data: bid, 
				headers: {'X-Access-Token': $cookies.get('opa.token')}
			});

			promise.then(
				function successCallback(response) {},
				function faliureCallback(response) {
					console.log(response);
				}
			);

			return promise;
		},
		
		myCompletedBids: function() {
			
			var promise = $http({
				method: 'GET',
				url: CONSTANTS.SERVICE_URL_BASE + '/bid/view-my-completed-bids',
				headers: {'X-Access-Token': $cookies.get('opa.token')}
			});

			
					promise.then(function sucesscallback(response){
		        		
		        		return response.data;
		        	},
		        	
		        	function faliurecallback(errors){
		        		
		        		return errors.data;
		        	});
		        	
		

			return promise;
		},

		getActiveBids: function() {
			
			var promise = $http({
				method: 'GET',
				url: CONSTANTS.SERVICE_URL_BASE + '/bid/my-active-bids', 
				headers: {'X-Access-Token': $cookies.get('opa.token')}
			});

			promise.then(
				function successCallback(response) {},
				function faliureCallback(response) {
					console.log(response);
				}
			);

			return promise;
		},

		getBidByProductForUser: function(productId) {
			
			var promise = $http({
				method: 'GET',
				url: CONSTANTS.SERVICE_URL_BASE + '/bid/get-bid-by-product-for-user/' + productId,
				headers: {'X-Access-Token': $cookies.get('opa.token')}
			});

			promise.then(
				function successCallback(response) {console.log(response);},
				function faliureCallback(response) {
					console.log(response);
				}
			);

			return promise;

		}
		
		       
		
    }
}]);