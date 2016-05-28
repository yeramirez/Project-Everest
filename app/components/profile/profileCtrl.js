'use strict';

choral.controller('ProfileCtrl', ['$scope', 'auth', 'user', 'CardSvc', function UserInfoCtrl ($scope, auth, user, CardSvc) {

  $scope.user = user;
  var user_id = user.data[0].user_id;
  $scope.username = user.data[0].author;

  $scope.like = function (card) {
    // card.likes += 1;
    CardSvc.like(card);
  };

  (function () {
		CardSvc.getUser($scope.user.data[0].author).then(function (cards) {
			$scope.cards = cards.data;
		});
	})();
}]);
