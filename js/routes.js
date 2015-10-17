angular.module('CelebrityCards')

.config(['$routeProvider',function($routeProvider) {
	$routeProvider
		
		.when('/', 
			{templateUrl: 'templates/celebrity-cards.html',
		   controller : 'MainController'})

		.when('/details/:celebrityId',
			{templateUrl: 'templates/celebrity-details.html',
		   controller : 'DetailsController'})

		.otherwise({redirectTo: '/'})
}]);