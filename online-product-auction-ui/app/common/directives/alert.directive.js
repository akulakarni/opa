angular
.module('common.directives')
.directive("opaAlert", ['OpaAlertService', function(OpaAlertService) {
    return {
        restrict : "E",
        templateUrl:"common/directives/alert.html",
        replace: true,
        link: function(scope) {
        	  scope.$watchCollection(OpaAlertService.getAlerts, function(alerts) {
        		  console.log(alerts);
        	    scope.alerts = alerts;
        	  });
        	}
   
    };
   
}]);