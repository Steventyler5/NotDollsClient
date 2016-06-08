"use strict";

let NotDolls = angular.module('NotDolls', [
		'ngRoute'
	]);

NotDolls.config(['$routeProvider',
	function ($routeProvider){
		console.log("app.js");
		$routeProvider
			.when('/', {
				templateUrl : 'partials/main.html',
				controller: 'MainController'
			})
			.otherwise('/');
	}])