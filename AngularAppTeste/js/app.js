var myApp = angular.module('app', ['ui.router']);

myApp.config(function ($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/');

	$stateProvider

        .state('home', {
        	url: '/',
        	templateUrl: "templates/home.html"
        })

		.state('about', {
			url: '/about',
			templateUrl: "templates/about.html"
		})

});