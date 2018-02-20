(function ($, window, document, undefined) {
	'use strict';

	$(function () {

		// listen to resourcesReady event
		$(window).one('resourcesReady', function() {
			init();
		});

		/* globals resourceLoader */
		resourceLoader({
			base: ffglobal.configuration.get('data.staticResourcesBase'),
			baseMap: {
				'##content': ffglobal.configuration.get('data.staticResourcesContentRepoBase')
			}
		});

		function init() {
			ffglobal.configuration.get('initCore')();
			ffglobal.configuration.get('initElementFunctions')();
		}

	});

	ffglobal.configuration.set('initCore', function () {

	});

})(jQuery, window, document);
