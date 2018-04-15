(function ($, window, document, undefined) {
	'use strict';

	$(function () {

		// listen to resourcesReady event
		$(window).one('resourcesReady', function() {
			init();
		});

		/* globals resourceLoader */
		resourceLoader({
			base: biotope.configuration.get('data.staticResourcesBase'),
			baseMap: {
				'##content': biotope.configuration.get('data.staticResourcesContentRepoBase')
			}
		});

		function init() {
			biotope.configuration.get('initCore')();
			biotope.configuration.get('initElementFunctions')();
		}

	});

	biotope.configuration.set('initCore', function () {

	});

})(jQuery, window, document);
