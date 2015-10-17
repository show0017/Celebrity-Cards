angular.module('CelebrityCards')

.controller('MainController', function($scope, CelebrityService){
	
	var onSuccessCallback = function(response){
				$scope.celebrities = response.data.items;
	}

	var onFailureCallback = function (response){

	};
	
	CelebrityService.getAll()
	 .then(onSuccessCallback, onFailureCallback);
});