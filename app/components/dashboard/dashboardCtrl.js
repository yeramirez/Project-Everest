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

  // Getting the posts from the database
  (function () {
    CardSvc.getAll()
    .then(function (cards) {
      $scope.cards = cards.data;
    });
  })();

  // Get user profile information calling Auth0 api
  $scope.profile = auth.profile;

  var personNickname = auth.profile.nickname;
  var personId = auth.profile.user_id;

  $scope.matched = false;

  $scope.like = function (card) {
    $scope.matched = true;
    CardSvc.like(card);
    console.log($scope.matched);

    CardSvc.addUserLike(card._id, {
      user: personNickname,
      user_id:personId
    }).success(function () {
      //$("ng-md-icon").removeClass("fav-btn").addClass( "fav-btn-fill");
    });
  };
  console.log($scope.matched);
}]);
