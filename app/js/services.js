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
		, groupScores: []
		, getGroupScores: function() {
				for(group in this.groups) {
					this.groupScores.push(group.score)
				}
				return this.groupScores
			}
		}
	}])

	.factory('chart', [function() {
		return {
		 	chart: {}
		, graph: {}
		,	createGraph: function(container) {
	      this.chart = Raphael(container, 0, 0, 400, 150)
        this.graph = this.chart.barchart(0, 0, 400, 150, [5, 2, 3, 1, 10, 8, 20, 3]);
        return this.graph
			}
		, updateGraph: function() {

				var tempGraph = this.chart.barchart(0, 0, 400, 150, [2, 5, 6, 3, 3, 6, 2, 5]);
				angular.forEach(this.graph.bars, function(value, key) {
				  value.animate({path: tempGraph.bars[key].attr()["path"]}, 300)
				})
				tempGraph.remove()
			}
		}
	}])