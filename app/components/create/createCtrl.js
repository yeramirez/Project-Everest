'use strict'

console.log('PostCtrl controller has loaded');

choral.controller('CreateCtrl', function ($scope, CardSvc, $mdDialog, auth, $state) {
	$scope.posts = [];
  $scope.profile = auth.profile.nickname;

	$scope.addCard = function () {
		CardSvc.add($scope.newPost)
		.then(function () {
			$scope.posts.push($scope.newPost);
      console.log('Can you hear it ', $scope.profile);
			$scope.newPost = '';
      $state.go('dashboard');
      console.log(posts);
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
