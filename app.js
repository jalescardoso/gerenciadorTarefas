'use strict';

angular.module('exemplo', [
  'ngRoute'
, 'task'
])
.config(function($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(true);
	$routeProvider
	.when('/', {
		templateUrl: 'task/task.html',
		controller: 'tableController',
		controllerAs: 'vm',
	})
	.when('/create', {
		templateUrl: 'task/form-task.html',
		controller: 'formController',
		controllerAs: 'vm',
	})
	.when('/update/:id', {
		templateUrl: 'task/form-task.html',
		controller: 'formController',
		controllerAs: 'vm',
	})
	.otherwise({redirectTo: '/'});
})