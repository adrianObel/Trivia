/* Controllers */

angular.module('trivia.controllers', [])
	
	.controller('startCardCtrl', ['$scope', '$location', 'triviaGame', function($scope, $location, triviaGame) {

		$scope.numbers = /^[0-9]+$/

		$scope.fadeOut = function() {
			$scope.visible = false
			
		}

		$scope.setGroups = function($event) {
			
			var keyPressed = $event.keyCode
			
			if(keyPressed === 13) {
				var numGroups = $scope.numGroups
				triviaGame.createGroups(numGroups)
				$location.path('game')
			}
		}
  }])

  .controller('gameCtrl', ['$scope', '$location', 'triviaGame', function($scope, $location, triviaGame) {
  	
  	if(triviaGame.groups.length === 0)
  		$location.path('/')

  	$scope.template = "partials/group-display.html"
	  
	  var total = []
      , groups = {
      		total: []
      	,	left: []
      	,	right: []
  		}
 	  groups.total = triviaGame.groups
  	total = groups.total
  	groups.left = total.splice(0, total.length / 2)
  	groups.right = total 

  	$scope.groups = groups

    $scope.givePoint = function(groupNumber) {
      triviaGame.nextQuestion()
    }

  }])

  .controller('gameBoardCtrl', ['$scope', 'triviaGame', function($scope, triviaGame) {
    $scope.template = 'partials/game-board.html'
    $scope.question = triviaGame.getQuestion
  }])

