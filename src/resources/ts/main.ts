
import configureStore from '../../components/state/configureStore';

(function ($, window, document) {
	'use strict';

	$(function () {

		// listen to resourcesReady event
		$(window).one('resourcesReady', function() {
			init();
		});

		/* globals resourceLoader */
		window['resourceLoader']({
			base: window['biotope'].configuration.get('data.staticResourcesBase'),
			baseMap: {
				'##content': window['biotope'].configuration.get('data.staticResourcesContentRepoBase')
			}
		});

		function init() {
			window['biotope'].configuration.get('initCore')();
			window['biotope'].configuration.get('initElementFunctions')();
		}

	});

	window['biotope'].configuration.set('initCore', function () {

		window['biotope'].store = configureStore({});
		// Load web component scripts
		var webComponents: any[] = [];
		$('[data-load-web-component]').each(function() {
			webComponents.push($(this).data('load-web-component'));
		});
		window['loadScriptsWhenReady'](webComponents);
	});

})(jQuery, window, document);
