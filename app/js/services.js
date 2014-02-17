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
				if(questionIndex < triviaGame.questions.length) {
					triviaGame.currentQuestion = triviaGame.questions[questionIndex++]
					return true
				}
			}
		, getQuestion: function() {
				return triviaGame.currentQuestion
			}
		, groupScores: []
		, getGroupScores: function() {
			console.log(this.groups)
				this.groupScores = []
				for(var i = 0, j = this.groups.length; i < j; i++) {
					this.groupScores.push(this.groups[i].score)
				}
				console.log(this.groupScores)
				return this.groupScores
			}
		, giveGroupPoint: function(groupNumber) {
				this.groups[groupNumber].score++
				return this.getGroupScores()
			}
		}
	}])

	.factory('chart', [function() {
		return {
		 	chart: {}
		, graph: {}
		,	createGraph: function(container) {
	      this.chart = Raphael(container, 0, 0, 400, 150)
        this.graph = this.chart.barchart(0, 0, 400, 150, [0, 0, 0, 0, 0, 0, 0, 0]);
        return this.graph
			}
		, updateGraph: function(scores) {
				var tempGraph = this.chart.barchart(0, 0, 400, 150, scores);
				angular.forEach(this.graph.bars, function(value, key) {
					if(key < scores.length)
				  	value.animate({path: tempGraph.bars[key].attr()["path"]}, 300)
				})
				tempGraph.remove()
			}
		}
	}])