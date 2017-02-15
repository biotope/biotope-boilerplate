(function ($, window, document, undefined) {
	'use strict';

	// set ReactDOM
	if(window.React && window.React.__SECRET_DOM_DO_NOT_USE_OR_YOU_WILL_BE_FIRED && !window.ReactDOM) {
		window.ReactDOM = React.__SECRET_DOM_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
	}

	$(document).ready(function () {
		var $conditionalResources = $('[data-resources]');

		// listen to resourcesReady event
		$(window).one('resourcesReady', function() {
			init();
		});

		/* globals resourceLoader */
		resourceLoader({
			base: global.configuration.data.staticResourcesBase,
			baseMap: {
				'##content': global.configuration.data.staticResourcesContentRepoBase
			}
		});

		function init() {
			global.configuration.get('initCore')();

			// initialize components
			$conditionalResources.each(function() {
				if ($(this).data('init')) {
					var init = eval($(this).attr('data-init')); // jshint ignore:line
					init($(this));
				}
			});
		}

	});

	global.configuration.set('initCore', function () {

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

	// $(window).load(function() {});

})(jQuery, window, document);
