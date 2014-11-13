//global define
'use strict';

	define(['Controllers/todoController'], function(controller) {
		var app = angular.module('todoApp',[]);
		app.controller('todoController',['$scope',controller]);
		return app;
	});