'use strict';
console.log('DashboardCtrl loaded');

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
.controller('DashboardCtrl', ['$scope', 'cards', 'auth', function ($scope, cards, auth, $mdOpenMenu) {

  $scope.profile = auth.profile;

	cards.success(function (data) {
		$scope.cards = data;
	});

	$scope.addOne = function(cards) {
		// adds one
		cards.upvotes += 1;
	};

  // $scope.refresh = function () {
	// 	CardSvc.fetch()
	// 	.then(function (todos) {
	// 		$scope.todos = todos.data;
	// 	});
	// }
	// $scope.refresh();

}]);
