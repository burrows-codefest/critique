'use strict';

// Configuring the Articles module
angular.module('memes').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Memes', 'memes', 'dropdown', '/memes(/create)?');
		Menus.addSubMenuItem('topbar', 'memes', 'List Memes', 'memes');
		Menus.addSubMenuItem('topbar', 'memes', 'New Meme', 'memes/create');
	}
]);