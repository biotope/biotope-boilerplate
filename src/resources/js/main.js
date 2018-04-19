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

		// Load web component scripts
		var webComponents = {};
		$('[data-load-web-component]').each(function() {
			webComponents[$(this).data('load-web-component')] = true;
		});

		for(var component in webComponents) {
			window.loadScriptsWhenReady(component);
		}
	});

})(jQuery, window, document);
