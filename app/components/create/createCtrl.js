'use strict'

console.log('PostCtrl controller has loaded');
var user = JSON.parse(localStorage.profile);
console.log(user.nickname);

choral.controller('CreateCtrl', function ($scope, CardSvc, $mdDialog, auth) {
	$scope.posts = [];
  $scope.profile = auth.profile;

  $scope.collab = true;

	$scope.addCard = function () {
		CardSvc.add($scope.newPost)
		.then(function () {
			$scope.posts.push($scope.newPost);
			$scope.newPost = '';
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
})
