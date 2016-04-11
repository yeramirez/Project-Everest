'use strict';
console.log('dashCtrl loaded');
choral.controller('dashCtrl', ['$scope', 'cards', function ($scope, cards){

		$scope.main = 'Hello world!';

		// hard-coded dummy data
		$scope.cards = cards.cards;

		// add a lyric card post
		$scope.addCard = function() {
			// check if input is null or is empty
			if (!$scope.lyrics || $scope.lyrics === '') {
				return;
			};

			// push to array
			$scope.cards.push({
				lyrics: $scope.lyrics,
				upvotes: 0,
				link: $scope.link,
				comments: [
					// fake comments
					{author: 'Pam', body: 'Nice!', upvotes:0},
					{author: 'Michael', body: 'TWSS', upvotes:0},
					{author: 'Creed', body: 'Meh', upvotes:0},
				]
			});

			// reset after post has been created
			$scope.lyrics = '';
			$scope.link = '';
		};

		// increment the upvotes on a lyric card
		$scope.addOne = function(card) {
			// adds one
			card.upvotes += 1;
		};
	}]);