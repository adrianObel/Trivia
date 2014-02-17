angular.module('trivia', [
  'ngRoute'
,	'ngAnimate'
, 'trivia.services'
, 'trivia.directives'
, 'trivia.controllers'
]).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	  $routeProvider.when('/', {
	  	templateUrl: 'partials/cards.html'
	  , controller: 'startCardCtrl'
		})

		$routeProvider.when('/game', {
			templateUrl: 'partials/main.html'
		,	controller: 'gameCtrl'
		})

		$routeProvider.when('/winner', {
			templateUrl: 'partials/winner-card.html'
		,	controller: 'winnerCardCtrl'
		})

	}])
