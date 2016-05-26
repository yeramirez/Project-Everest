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

  var newLiked = "sarah";
  var personNickname = auth.profile.nickname;

  $scope.like = function (card) {
    // card.likes += 1;
    CardSvc.like(card);
    var hellothere = JSON.stringify(card);
    console.log("The card is " + hellothere);
    CardSvc.addUserLike(card._id, newLiked)
    .then(function () {
      console.log(card);
    });
    //$( "ng-md-icon" ).removeClass( "fav-btn" ).addClass( "fav-btn-fill");
  };

  $scope.dislike = function (card) {
    CardSvc.dislike(card);
  };
}]);
