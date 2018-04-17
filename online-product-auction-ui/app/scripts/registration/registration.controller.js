'use strict';

angular.module('opa.register')
.controller('RegisterCtrl', ['UserService','$state', 'OpaAlertService',function (UserService, $state, OpaAlertService) {
	
	 OpaAlertService.clear();
	console.log('RegisterCtrl');
	//this.data = {name: 'abc', email:'neha@gmail.com', password:'Ss@23456', confirmPassword:'Ss@23456',addressLineOne: 'abc',addressLineTwo:'abc', city:'abc', state:'abc', pincode: 123456,number: 1234567890};
	this.isValid = "";
	this.submitRegistration = function() {
		
		console.log('RegisterCtrl.submitRegistration');
		UserService.register(this.data)
		.then(function success(response) {
			console.log(response);
			OpaAlertService.success('successfully registered');
			$state.go("login");
			this.data="";
		}.bind(this), 
		function error(errors) {
			console.log(errors);
			OpaAlertService.error('Already  Registered!!');
		}.bind(this));
	};
	
	this.cancel = function(){   

		$state.go("login");
		
    };
}]);
