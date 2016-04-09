'use strict';

var choral = angular.module('choralApp', ['ui.router']);

choral.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider){
	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: '/home.html',
			controller: 'MainCtrl'
		})

		.state('/cards', {
			url: '/cards/{id}',
			templateUrl: '/posts.html',
			controller: 'CardCtrl'
		});

	$urlRouterProvider.otherwise('home');
}]);

choral.factory('cards', [function(){
	var y = {
		cards: []
	};
	return y;
}]);

choral.controller('MainCtrl', [
	'$scope',
	'cards',
	function($scope, cards){

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

choral.controller('CardCtrl', [
	'$scope', 
	'$stateParams',
	'cards',
	function($scope, $stateParams, cards) {

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














