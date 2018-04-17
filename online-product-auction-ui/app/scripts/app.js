'use strict';

angular
  .module('opa', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'base64',
    'blockUI',
    'common',
    'opa.home',
    'opa.login',
    'opa.forgotPassword',
    'opa.resetPassword',
	'opa.register',
	'opa.seller',
	'opa.buyer',
    'opa.logout'
  ]);
