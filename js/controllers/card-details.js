angular.module('CelebrityCards')

.controller('DetailsController',function($scope, $routeParams, CelebrityService){
	var myId = $routeParams.celebrityId;

	CelebrityService.getById(myId).
	then(function(response){
		//success
		var allCelebrities = response.data.items;
	 	for(var i=0; i< allCelebrities.length; i++){
			if(allCelebrities[i].id == myId)
				$scope.celebrity =  allCelebrities[i];
		}
		console.log($scope.celebrity);
	},
	function(response){
		//error
	})
});