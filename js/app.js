angular.module('CelebrityCards', ['ngRoute'])

.directive('card',  function(){
	return {
		restrict   : 'E',
		replace    : true, 
		templateUrl: 'templates/card.html',
	};
});
