(function() {
angular.module('stylist', ['ngRoute'])
angular.module('stylist')
	.controller('mainController', ['$scope', '$http', function($scope, $http) {
	console.log("hello from index.js")
	var submissionsArray = [];
	var applicationsArray = [];
	var refresh = function() {
		var data = {}
		$http.get('/api/applications/get', data).success(function(response) {
			$scope.applicationsArray = response;
			$scope.application = "";
		});
	};
	refresh();
	$scope.submitApp = function() {
		$scope.applicationsArray = [];
		var request = {
			first: $scope.application.first,
			last: $scope.application.last,
			address: $scope.application.address,
			city: $scope.application.city,
			state: $scope.application.state,
			zip: $scope.application.zip,
			email: $scope.application.email,
			cell: $scope.application.cell,
			home: $scope.application.home,
			month: $scope.application.month,
			day: $scope.application.day,
			year: $scope.application.year,
			facebook: $scope.application.facebook,
			referal: $scope.application.referal,
			description: $scope.application.description,
			work: $scope.application.work
		}
		$http.post('/api/applications/post', request).success(function(response) {
			$scope.applicationsArray.push(response);
			refresh()
		}).error(function(error) {
			console.log(error);
		});
	};
	var refreshSubmit = function() {
		var data = {}
		$http.get('/api/submissions/get', data).success(function(response) {
			$scope.submissionsArray = response;
			$scope.submission = "";
		});
	};
	refreshSubmit();
	$scope.submitSub = function() {
		$scope.submissionsArray = [];
		var request = {
			name: $scope.submission.name,
			email: $scope.submission.email,
			subject: $scope.submission.subject,
			message: $scope.submission.message
		}
		$http.post('/api/submissions/post', request).success(function(response) {
			$scope.submissionsArray.push(response);
			refreshSubmit()
		}).error(function(error) {
			console.log(error);
		});
	};
	
}]);
angular.module('stylist')
	.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl : '/html/main.html',
			controller : 'mainController'
		})
		.when('/home', {
			templateUrl : '/html/main.html',
			controller : 'mainController'
		})
		.when('/carousel-example-generic', {
			templateUrl : '/html/main.html',
			controller : 'mainController'
		})
		.when('/about', {
			templateUrl : '/html/about.html',
			controller : 'mainController'
		})
		.when('/shop', {
			templateUrl : '/html/shop.html',
			controller : 'mainController'
		})
		.when('/opportunities', {
			templateUrl : '/html/opportunities.html',
			controller : 'mainController'
		})
		.when('/blog', {
			templateUrl : '/html/blog.html',
			controller : 'mainController'
		})
		.when('/contact', {
			templateUrl : '/html/contact.html',
			controller : 'mainController'
		})
		.when('/apply', {
			templateUrl : '/html/apply.html',
			controller : 'mainController'
		})
		.when('/login', {
			templateUrl : '/html/login.html',
			controller : 'mainController'
		})
	}]);
}());