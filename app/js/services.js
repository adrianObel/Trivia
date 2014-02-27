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
      , winner: {}
      , currentQuestion: {}
      , groupScores: []
      , newGame: function() {
        this.groups = []
        this.winner = {}
        this.currentQuestion = this.questions[0]
        this.groupScores = []
        questionIndex = 0
      }

      , createGroups: function(numGroups) {
        for (var i = 0; i < numGroups; i++) {
          this.groups.push({
          number: i + 1
          , score: 0
          })
        }
      }

      , nextQuestion: function() {
        if(questionIndex < this.questions.length) {
          return this.currentQuestion = this.questions[++questionIndex]
        }
      }

      , getQuestion: function() {
        return triviaGame.currentQuestion
      }

      , getGroupScores: function() {
        this.groupScores = []
        for(var i = 0, j = this.groups.length; i < j; i++) {
          this.groupScores.push(this.groups[i].score)
        }
        return this.groupScores
      }

      , giveGroupPoint: function(groupNumber) {
        this.groups[groupNumber].score++
        return this.getGroupScores()
      }

      , endGame: function() {
      var winner = this.groups[0]
      for(var i = 0, j = this.groups.length; i < j; i++) {
        if(this.groups[i].score > winner.score)
        winner = this.groups[i]
      }
      return this.winner = winner
      }
    }
  }])

  .factory('chart', [function() {
    return {
      chart: {}
    , graph: {}
    ,	createGraph: function(container) {
      this.chart = Raphael(container, 0, 0, 400, 150)
      this.graph = this.chart.barchart(0, 0, 400, 150, [0, 0, 0, 0, 0, 0, 0, 0])
      return this.graph
    }
    , updateGraph: function(scores) {
      var tempGraph = this.chart.barchart(0, 0, 400, 150, scores)
      angular.forEach(this.graph.bars, function(value, key) {
        if(key < scores.length)
          value.animate({path: tempGraph.bars[key].attr()["path"]}, 300)
      })
      tempGraph.remove()
      }
    }
  }])