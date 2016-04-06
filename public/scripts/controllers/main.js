'use strict';

var choral = angular.module('choralApp', []);

choral.controller('MainCtrl', ['$scope', function($scope){
	$scope.main = 'Hello world!';
	$scope.cards = [
		{lyrics: 'post 1', upvotes: 5},
		{lyrics: 'post 2', upvotes: 2},
		{lyrics: 'post 3', upvotes: 15},
		{lyrics: 'post 4', upvotes: 9},
		{lyrics: 'post 5', upvotes: 4}
	];

	// add a lyric card post
	$scope.addCard = function() {
		// check if input is null or is empty
		if (!$scope.lyrics || $scope.lyrics === '') {
			return;
		};

		// push to array
		$scope.cards.push({lyrics: $scope.lyrics, upvotes: 0});
		// reset after post has been created
		$scope.lyrics = '';
	};

	// increment the upvotes on a lyric card
	$scope.addOne = function(card) {
		// adds one
		card.upvotes += 1;
	};

}]);