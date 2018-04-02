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

		// offcanvas click events
		$('[data-offcanvas-show]').on('click', function (e) {
			e.preventDefault();
			$(this).closest('.offcanvas').toggleClass('offcanvas--show-' + $(this).data('offcanvas-show'));
		});

		$('.offcanvas__exit').on('click', function () {
			$(this).closest('.offcanvas').removeClass('offcanvas--show-left offcanvas--show-right');
			$('[data-offcanvas-show]').removeClass('is-active');
		});

		// hamburger toggle
		$('.hamburger').on('click', function () {
			$(this).toggleClass('is-active');
		});
	});

})(jQuery, window, document);
