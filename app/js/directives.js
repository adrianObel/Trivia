/* Directives */

angular.module('trivia.directives', [])

  .directive('numberInput', function() {
    return {
      require: 'ngModel'
    , link: function(scope, element, attr, ngModelCtrl) {
      function useInput(text) {
        var fixedInput = text.replace(/[^1-8]$/, '')
        
        fixedInput = fixedInput.length > 1? fixedInput[0] : fixedInput
        if(fixedInput !== text) {
          ngModelCtrl.$setViewValue(fixedInput)
          ngModelCtrl.$render()
        }
        return fixedInput
      }
      ngModelCtrl.$parsers.push(useInput)
      }
    }
  })

  .directive('barChart',['chart', 'triviaGame', function(chart, triviaGame) {
    return {
      restrict: 'A'
    , link: function(scope, element, attrs) {
        var container = document.getElementById('bar-chart')
        chart.createGraph(container)
      }
    }
  }])