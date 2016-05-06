'use strict'

console.log('PostCtrl controller has loaded');

choral.controller('CreateCtrl', function ($scope, CardSvc, $mdDialog, auth, $state) {
	$scope.posts = [];
  $scope.profile = auth.profile.nickname;

  $scope.checkboxModel = {
    value1 : true
  };

	$scope.addCard = function () {
		CardSvc.add($scope.newPost)
		.then(function () {
			$scope.posts.push($scope.newPost);
			$scope.newPost = '';
      $state.go('dashboard');
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
