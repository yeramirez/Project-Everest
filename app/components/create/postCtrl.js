'use strict'

console.log('PostCtrl controller has loaded');

choral.controller('PostCtrl', function ($scope, PostSvc, $mdDialog) {
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

	$scope.moods = [
		"Happy",
		"Sad",
		"Angry",
		"Hopeful"
	]

  $scope.data = {
    cb1: true
  }

  $scope.message = 'false';
  $scope.onChange = function(cbState) {
  	$scope.message = cbState;
  };
})
