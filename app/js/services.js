/* Services */

angular.module('trivia.services', [])
	
	.factory('triviaGame', ['$http', function($http) {

		$http.get('questions/questions.json')
			.success(function(data, status) {
				triviaGame.questions = data
				triviaGame.currentQuestion = triviaGame.questions[triviaGame.questionIndex]
			})

		var triviaGame = {
			groups: function(numGroups) {
				return numGroups === undefined ?
					triviaGame.numGroups :
					triviaGame.numGroups = numGroups
			}
		,	questionIndex: 0
		}
		return triviaGame
	}])