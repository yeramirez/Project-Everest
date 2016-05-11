'use strict';

choral.controller('CardCtrl', [
  '$scope',
  'CardSvc',
  'card',
  'auth',
  function ($scope, CardSvc, card, auth) {
    $scope.card = card;
    $scope.user = auth.profile.nickname;
    $scope.user_id = auth.profile.user_id;

    $scope.addComment = function () {
      if ($scope.body === '') {
          return;
      }
      CardSvc.addComment(card._id, {
          body: $scope.body,
          author: $scope.user,
          user_id: $scope.user_id,
      }).success(function (comment) {
          $scope.card.comments.push(comment);
      });
      $scope.body = '';
    };

    $scope.like = function (comment) {
      CardSvc.likeComment(card, comment);
    };

    $scope.dislike = function (comment) {
      CardSvc.dislikeComment(card, comment);
    };
  }]);
