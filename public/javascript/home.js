(function() {
angular.module('stylist', ['ngRoute'])
angular.module('stylist')
	.controller('mainController', ['$scope', '$http', function($scope, $http) {
	$http.get('/api/me').then(function(returnData) {
			$scope.user = returnData.data;
	});
	var submissionsArray = [];
	var refresh = function() {
		var data = {}
		$http.get('/api/applications/get', data).success(function(response) {
			$scope.applicationsArray = response;
			$scope.application = "";
		});
	};
	refresh();
	var refreshSubmit = function() {
		var data = {}
		$http.get('/api/submissions/get', data).success(function(response) {
			$scope.submissionsArray = response;
			$scope.submission = "";
			console.log(response);
		});
	};
	refreshSubmit();
	$scope.deleteSub = function(id) {
		$http.delete('/api/submissions/delete/' + id).success(function(response) {
			refreshSubmit();
		});	
	};
	$scope.deleteApp = function(id) {
		$http.delete('/api/applications/delete/' + id).success(function(response) {
			refresh();
		});	
	};	
}]);
angular.module('stylist')
	.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl : '/html/applications.html',
			controller : 'mainController'
		})
		.when('/calendar', {
			templateUrl : '/html/calendar.html',
			controller : 'mainController'
		})
		.when('/applications', {
			templateUrl : '/html/applications.html',
			controller : 'mainController'
		})
		.when('/inquiries', {
			templateUrl : '/html/inquiries.html',
			controller : 'mainController'
		})
		
	}]);
}());











