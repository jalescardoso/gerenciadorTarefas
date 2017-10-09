'use strict';
angular.module('task', [])
	.service('srv', function () {
		this.getData = () => {
			if (!localStorage.getItem('tasks')) {
				let tasks = [
					{ id: guid(), descricao: 'Desenvolver front-end', status: 'execução', criacao: new Date("2015-03-25T12:00:00"), criador: 'larissa', destino: 'larissa' },
					{ id: guid(), descricao: 'alterar css', status: 'completada', criacao: new Date("2015-03-25T12:00:00"), criador: 'jales', destino: 'jales' },
					{ id: guid(), descricao: 'injetar angular no projeto', status: 'execução', criacao: new Date("2015-03-25T12:00:00"), criador: 'jales', destino: 'jales' },
					{ id: guid(), descricao: 'desenvolver cadastros', status: 'completada', criacao: new Date("2015-03-20T16:00:00"), criador: 'larissa', destino: 'larissa' },
					{ id: guid(), descricao: 'desenvolver tabelas', status: 'execução', criacao: new Date("2015-03-25T12:00:00"), criador: 'jales', destino: 'jales' },
					{ id: guid(), descricao: 'alterar detalhes', status: 'ativa', criacao: new Date("2015-03-25T12:00:00"), criador: 'larissa', destino: 'jales' },
					{ id: guid(), descricao: 'editar usuarios', status: 'execução', criacao: new Date("2015-03-20T16:00:00"), criador: 'larissa', destino: 'larissa' },
				];
				localStorage.setItem('tasks', JSON.stringify(tasks));
			}
			let objs = JSON.parse(localStorage.getItem('tasks'));
			return objs;
		}

		let guid = () => {
			function s4() {
				return Math.floor((1 + Math.random()) * 0x10000)
					.toString(16)
					.substring(1);
			}
			return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
				s4() + '-' + s4() + s4() + s4();
		}

		this.save = (data) => {
			if (!data.id) {
				data.id = guid();
				data.criacao = Date.now();
				data.criador = 'jales';
			}
			let list = this.getData().filter(function (el) { return el.id !== data.id });
			list.push(data);
			localStorage.setItem('tasks', JSON.stringify(list));
		}
	})