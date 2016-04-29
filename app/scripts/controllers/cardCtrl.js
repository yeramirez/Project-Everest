'use strict';
choral.controller('CardCtrl', [
		'$scope', 
		'$stateParams',
		'cards',
		function ($scope, $stateParams, cards) {

			$scope.card = cards.cards[$stateParams.id];

			console.log($scope.cards + ' these are the cards');

			$scope.addComment = function() {
				// check if body is null or empty
				if(!$scope.body || $scope.body === '') {
					return;
				}

				// push to array
				$scope.card.comments.push({
					body: $scope.body,
					author: 'user',
					upvotes: 0
				});

				// reset after comment has been created
				$scope.body = ''
			};
	}]);