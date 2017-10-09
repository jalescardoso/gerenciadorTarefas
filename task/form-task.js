'use strict'
angular.module('task').controller('formController', function ($scope, $routeParams, $location, srv) {
	let id = $routeParams.id;
	if (id) {
		$scope.btnLabel = 'Alterar';
		$scope.item = srv.getData().filter(function (el) { return el.id === id })[0];
	} else {
		$scope.btnLabel = 'Adicionar';
	}
	$scope.submitForm = function (data) {
		srv.save(data);
		$location.url('/');
	}
})