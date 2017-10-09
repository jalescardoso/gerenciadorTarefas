'use strict';
angular.module('task').controller('tableController', function ($scope, $location, srv) {
  $scope.tasks = srv.getData();

  $scope.delete = function () {
    let selecionado = $scope.tasks.filter(el => el.selecionado );
    if (selecionado.length === 0) {
      alert('selecione pelo menos um item');
    } else {
      $scope.tasks = $scope.tasks.filter(el => !el.selecionado);
      Notify('Items deletados com sucesso', 'top-right', '5000', 'info', 'fa-warning', true);
      localStorage.setItem('tasks', JSON.stringify($scope.tasks));
    }
  }

  $scope.editar = function () {
    let selecionado = $scope.tasks.filter(el => el.selecionado );
    if (selecionado.length === 1) {
      $location.url('/update/' + selecionado[0].id);
    } else {
      alert('selecione 1')
    }
  }
})
