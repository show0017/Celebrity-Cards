angular.module('CelebrityCards')
.factory('CelebrityService', function($http){
	
	var getAll = function(successCallback, failureCallback){
		return $http({ method: 'GET', url: 'data/celebrities.json'});
	};

	var getById = function(id){
		return $http({ method: 'GET', url: 'data/celebrities.json'});
	}

	return{
		getAll: getAll,
		getById: getById
	}

});