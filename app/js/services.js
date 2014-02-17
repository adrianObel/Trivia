/* Services */

angular.module('trivia.services', [])
	
	.factory('triviaGame', ['$http', function($http) {
		var questionIndex = 0

		$http.get('questions/questions.json')
			.success(function(data, status) {
				triviaGame.questions = data
				triviaGame.currentQuestion = triviaGame.questions[questionIndex]
			})

		return triviaGame = {
			groups: function(numGroups) {
				return numGroups === undefined ?
					triviaGame.numGroups :
					triviaGame.numGroups = numGroups
			}
		,	currentQuestion: {}
		, nextQuestion: function() {
				if(questionIndex < triviaGame.questions.length)
					triviaGame.currentQuestion = triviaGame.questions[questionIndex++]
			}
		, getQuestion: function() {
				return triviaGame.currentQuestion
			}
		}
	}])