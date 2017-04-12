'use strict';

angular.module('exemplo', [
  'ngRoute'
, 'task'
])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
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
	.otherwise({redirectTo: '#/'});
}])