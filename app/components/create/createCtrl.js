'use strict'

choral.controller('CreateCtrl', function ($scope, CardSvc, $mdDialog, auth, $state) {
  // Empty array setup
	$scope.posts = [];

  // Set profile information to variables
  $scope.nickname = auth.profile.nickname;
  $scope.user_id = auth.profile.user_id;

  // Set up the creation of a new card
  $scope.newCard = {
    lyrics: '',
    mood: '',
    author: $scope.nickname,
    user_id: $scope.user_id
  }

  // Add a card using the add method
	$scope.addCard = function () {
    // Pass the card we set up earlier
		CardSvc.add($scope.newCard)
		.then(function () {
      // Push the card into the array we made earlier too
			$scope.posts.push($scope.newCard);
      // Reset the value
			$scope.newCard = '';
      // Take me to the dashboard!
      $state.go('dashboard');
		});
	}

	$scope.removePost = function () {
		CardSvc.delete($scope.post)
		.then(function () {
			$scope.posts.remove(post);
		})
	}

  // Set the mood...
	$scope.moods = [
		"Happy",
		"Sad",
		"Angry",
		"Hopeful"
	]
})
