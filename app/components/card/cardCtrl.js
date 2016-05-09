'use strict';
// choral.controller('CardCtrl', [
// 		'$scope',
// 		'$stateParams',
// 		'cards',
// 		function ($scope, $stateParams, cards) {
//
//       (function () {
//     		CardSvc.get()
//     		.then(function (cards) {
//     			$scope.cards = cards.data;
//     		});
//     	})();
//
// 			console.log($scope.cards + ' these are the cards');
//
// 			$scope.addComment = function() {
// 				// check if body is null or empty
// 				if(!$scope.body || $scope.body === '') {
// 					return;
// 				}
//
// 				// push to array
// 				$scope.card.comments.push({
// 					body: $scope.body,
// 					author: 'user',
// 					likes: 0
// 				});
//
// 				// reset after comment has been created
// 				$scope.body = ''
// 			};
// 	}]);

choral.controller('CardCtrl', [
  '$scope',
  'CardSvc',
  'card',
  function ($scope, CardSvc, card) {
      $scope.card = card;

      $scope.addComment = function () {
          if ($scope.body === '') {
              return;
          }
          CardSvc.addComment(card._id, {
              body: $scope.body,
              author: 'user'
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
