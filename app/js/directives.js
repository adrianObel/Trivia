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