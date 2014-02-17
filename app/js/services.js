/* Services */

angular.module('trivia.services', [])
	
	.factory('triviaGame', ['$http', function($http) {
		var questions = []
			, triviaGame

		$http.get('questions/questions.json')
			.success(function(data, status) {
				questions = data
				triviaGame.currentQuestion = questions[0]
			})

	  triviaGame = {
			groups: function(numGroups) {
				return numGroups === undefined ?
					triviaGame.numGroups :
					triviaGame.numGroups = numGroups
			}
		}
		return triviaGame
	}])