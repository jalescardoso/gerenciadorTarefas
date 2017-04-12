(function () {
'use strict';

angular.module('task', [])
  .controller('tableController',['$location', tableController])
  .controller('formController',['$routeParams', '$location', formController])

  function formController($routeParams, $location){
  	var vm = this;
    var id = $routeParams.id;
    if(id){
        vm.btnLabel = 'Alterar';
        vm.item = getData().filter(function(el){ return el.id === id })[0];
    }else{
        vm.btnLabel = 'Adicionar';
    }
  	vm.submitForm = function(data){
      save(data);
      $location.url('/');
  	}
  }

  function tableController($location){
    var vm = this;
    vm.tasks = getData();
    
    vm.delete = function(){
      var selecionado = vm.tasks.filter(function(el){ return el.selecionado });
      if(selecionado.length === 0){
        alert('selecione pelo menos um item')
      }else{
       vm.tasks = vm.tasks.filter(function(el){ return !el.selecionado });
       Notify('Items deletados com sucesso', 'top-right', '5000', 'info', 'fa-warning', true);
       localStorage.setItem('tasks', JSON.stringify(vm.tasks));
     }
    }

    vm.editar = function(){
      var selecionado = vm.tasks.filter(function(el){ return el.selecionado });
      if(selecionado.length === 1){
        $location.url('/update/'+ selecionado[0].id);
      }else{
        alert('selecione 1')
      }
    }
  }

  function getData(){
  	if(!localStorage.getItem('tasks')){
    	var tasks = [
  	    {id : guid(), descricao:'Desenvolver front-end', status:'execução', criacao: new Date("2015-03-25T12:00:00"), criador: 'larissa', destino : 'larissa'},
  	    {id : guid(), descricao:'alterar css', status:'completada', criacao: new Date("2015-03-25T12:00:00"), criador: 'jales', destino : 'jales'},
  	    {id : guid(), descricao:'injetar angular no projeto', status:'execução', criacao: new Date("2015-03-25T12:00:00"), criador: 'jales', destino : 'jales'},
  	    {id : guid(), descricao:'desenvolver cadastros', status:'completada', criacao: new Date("2015-03-20T16:00:00"), criador: 'larissa', destino : 'larissa'},
  	    {id : guid(), descricao:'desenvolver tabelas', status:'execução', criacao: new Date("2015-03-25T12:00:00"), criador: 'jales', destino : 'jales'},
  	    {id : guid(), descricao:'alterar detalhes', status:'ativa', criacao: new Date("2015-03-25T12:00:00"), criador: 'larissa', destino : 'jales'},
  	    {id : guid(), descricao:'editar usuarios', status:'execução', criacao: new Date("2015-03-20T16:00:00"), criador: 'larissa', destino : 'larissa'},
    	 ];
  	   localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    var objs = JSON.parse( localStorage.getItem('tasks'));
    console.table(objs)
    return objs;
  }

  function guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }

  function save(data){
    if(!data.id){
      data.id = guid();
      data.criacao = Date.now();
      data.criador = 'jales';
    }
    var list = getData().filter(function(el){ return el.id !== data.id });
    list.push(data);
    localStorage.setItem('tasks', JSON.stringify(list));
  }

})()