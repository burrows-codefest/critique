'use strict';

// Setting up route
angular.module('memes').config(['$stateProvider',
	function($stateProvider) {
		// Articles state routing
		$stateProvider.
		state('listMemes', {
			url: '/memes',
			templateUrl: 'modules/memes/views/list-articles.client.view.html'
		}).
		state('createMeme', {
			url: '/memes/create',
			templateUrl: 'modules/memes/views/create-article.client.view.html'
		}).
		state('viewMeme', {
			url: '/memes/:articleId',
			templateUrl: 'modules/memes/views/view-article.client.view.html'
		}).
		state('editMeme', {
			url: '/memes/:articleId/edit',
			templateUrl: 'modules/memes/views/edit-article.client.view.html'
		});
	}
]);