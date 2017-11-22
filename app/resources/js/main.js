(function ($, window, document, undefined) {
	'use strict';

	$(function () {
		var $conditionalResources = $('[data-resources]');

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

			// initialize components
			// TODO: move this as a function to conditional loader and call it with an event like 'resourceLoader.init'
			// TODO: make sure conditional loader things are iitialized AFTER all other inits in main.js (maybe a comment where to place your plugin inits is enough)
			$conditionalResources.each(function() {
				if ($(this).data('init')) {
					var init = eval($(this).attr('data-init')); // jshint ignore:line
					init($(this));
				}
			});
		}

	});

	ffglobal.configuration.set('initCore', function () {

		// hamburger toggle
		$('.hamburger').on('click', function () {
			$(this).toggleClass('is-active');
		});
	});

	// $(window).load(function() {});

})(jQuery, window, document);
