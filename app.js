'use strict';
angular.module('appModule', [
  'ngRoute'
, 'task'
])
.config(function($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(true);
	$routeProvider
	.when('/', {
		templateUrl: 'task/task.html',
		controller: 'tableController'
	})
	.when('/create', {
		templateUrl: 'task/form-task.html',
		controller: 'formController'
	})
	.when('/update/:id', {
		templateUrl: 'task/form-task.html',
		controller: 'formController'
	})
	.otherwise({redirectTo: '/'});
})