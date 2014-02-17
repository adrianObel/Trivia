/* Filters */

angular.module('trivia.filters', []).
  filter('numbers', function(text) {
  	return text.match('^[0-9]+$') ? text : ''
    	
  })
