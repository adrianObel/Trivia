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
			groups: []
		, createGroups: function(numGroups) {
			for (var i = 0; i < numGroups; i++) {
				this.groups.push({
					number: i + 1
				, score: 0
				})
			};
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