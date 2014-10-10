'use strict';

//Articles service used for communicating with the articles REST endpoints
angular.module('memes').factory('Memes', ['$resource',
	function($resource) {
		return $resource('memes/:memeId', {
			articleId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);