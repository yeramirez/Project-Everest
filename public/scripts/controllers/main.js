var app = angular.module('choralApp', []);

app.controller('MainCtrl', ['$scope', function($scope){
	$scope.main = 'Hello world!';
	$scope.posts = [
		'post 1',
		'post 2',
		'post 3',
		'post 4',
		'post 5'
	];
}]);

