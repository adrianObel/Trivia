/* Services */

angular.module('trivia.services', [])
	
	.factory('triviaGame', function() {
		var triviaGame = {
			groups: function(numGroups) {
				return numGroups === undefined ?
					triviaGame.numGroups :
					triviaGame.numGroups = numGroups
			}
		}
		return triviaGame
	})