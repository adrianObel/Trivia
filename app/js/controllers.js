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

  .controller('gameCtrl', ['$scope', '$location', 'triviaGame', 'chart', function($scope, $location, triviaGame, chart) {
  	
  	if(triviaGame.groups.length === 0)
  		$location.path('/')

  	$scope.template = "partials/group-display.html"
	  
      var groups = {
      		total: []
      	,	left: []
      	,	right: []
        , len: 0
  		}

 	  groups.total = triviaGame.groups
    groups.len = groups.total.length
  	groups.left = groups.total.slice(0, groups.len / 2)
  	groups.right = groups.total.slice(groups.len / 2, groups.len)

  	$scope.groups = groups

    $scope.givePoint = function(groupNumber) {
      if(triviaGame.nextQuestion()) {
        triviaGame.giveGroupPoint(groupNumber - 1)
        chart.updateGraph([2, 5, 20, 23, 56])
      }
    }

  }])

  .controller('gameBoardCtrl', ['$scope', 'triviaGame', function($scope, triviaGame) {
    $scope.template = 'partials/game-board.html'
    $scope.question = triviaGame.getQuestion
  }])

  .controller('chartCtrl', ['$scope', 'triviaGame', function($scope, triviaGame) {

  }])
