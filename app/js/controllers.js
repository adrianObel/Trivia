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
				triviaGame.groups(numGroups)
				$location.path('game')
			}
		}
  }])

  .controller('gameCtrl', ['$scope', '$location', 'triviaGame', function($scope, $location, triviaGame) {
  	
  	if(triviaGame.groups() == undefined)
  		$location.path('/')

  	$scope.template = "partials/group-display.html"
	  
	  var numGroups = triviaGame.groups()
  		,	total = []

  	var groups = {
  		total: []
  	,	left: []
  	,	right: []
		}

  	for(var i = 0; i < numGroups; i++) {
  		groups.total.push({
  			number: i + 1
  		})
  	}
  	total = groups.total
  	groups.left = total.splice(0, total.length / 2)
  	groups.right = total 

  	$scope.groups = groups


  }])

  .controller('gameBoardCtrl', ['$scope', 'triviaGame', function($scope, triviaGame) {
    $scope.template = 'partials/game-board.html'
    $scope.question = {
      number: '#1'
    , body : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, tempore, error, delectus vel nobis similique odio eligendi veniam a nesciunt cumque esse possimus unde beatae hic soluta amet odit molestiae.'
    , multipleChoice: ['Lorem', 'Loren', 'Loaren', 'Loarm']
    }

  }])

