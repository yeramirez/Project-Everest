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
// 					upvotes: 0
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
          CardSvc.addComment(post._id, {
              body: $scope.body,
              author: 'user'
          }).success(function (comment) {
              $scope.card.comments.push(comment);
          });
          $scope.body = '';
      };

      $scope.upvote = function (comment) {
          CardSvc.upvoteComment(card, comment);
      };

      $scope.downvote = function (comment) {
          CardSvc.downvoteComment(card, comment);
      };

  }]);
