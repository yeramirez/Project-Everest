'use strict'

console.log('PostCtrl controller has loaded');

choral.controller('PostCtrl', function ($scope, PostSvc) {
	$scope.posts = [];

	$scope.addPost = function () {
		PostSvc.add($scope.newPost)
		.then(function () {
			$scope.posts.push({title: $scope.newPost});
			$scope.newPost = {};
		});
	}

	$scope.removePost = function () {
		PostSvc.delete($scope.post)
		.then(function () {
			$scope.posts.remove(post);
		})
	}
})