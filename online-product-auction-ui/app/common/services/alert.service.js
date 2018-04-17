angular.module('common.services').factory('OpaAlertService', function() {

	var alerts = [];
	return {
		add : function(type, msg) {
			var self = this;
			var alert = {
				type : type,
				msg : msg,
				close : function() {
					return self.closeAlert(alert);
				}
			};
			return alerts.push(alert);
		},
		success : function(msg) {
			return this.add('success', msg);
		},
		error : function(msg) {
			return this.add('error', msg);
		},
		warnings : function(msg) {
			return this.add('warning', msg);
		},
		info : function(msg) {
			return this.add('info', msg);
		},
		closeAlert : function(alert) {
			return this.closeAlertIdx(alerts.indexOf(alert));
		},
		closeAlertIdx : function(index) {
			return alerts.splice(index, 1);
		},
		clear : function() {
			alerts = [];
		},
		getAlerts : function() {
			return alerts;
		}
	};
});