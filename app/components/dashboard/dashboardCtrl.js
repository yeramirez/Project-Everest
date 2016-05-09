'use strict';

angular.module('choral.postList', [
  'ui.router'
])
.config(function ($stateProvider) {
  $stateProvider
    .state('dashboard', {
      url: '/dashboard',
      controller: 'DashboardCtrl',
      templateUrl: 'components/dashboard/dashboard.tpl.html',
      data: {
        requiresLogin: true
      }
    })
})
.controller('DashboardCtrl', ['$scope', 'CardSvc', 'auth', function ($scope, CardSvc, auth, $mdOpenMenu) {

  // Get user profile information calling Auth0 api
  $scope.profile = auth.profile;

  // Upvote a post
	$scope.addOne = function(cards) {
		// adds one
		cards.upvotes += 1;
	};

  // Getting the posts from the database
  (function () {
		CardSvc.getAll()
		.then(function (cards) {
			$scope.cards = cards.data;
		});
	})();
}]);
