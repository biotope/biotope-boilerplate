(function(window) {
	'use strict';

	// simple async script loaders - only for demo purposes!!!
	window.loadScriptAsync = function (url) {
		var element = document.createElement('script');
		element.async = true;
		element.src = url;

		document.body.appendChild(element);
	};

	window.loadScriptsWhenReady = function (urls) {
		if (!Array.isArray(urls)) {
			urls = [urls];
		}

		// Web Components Polyfill Event - this is not a native event!!!
		window.addEventListener('WebComponentsReady', function () {

			// load all component scripts
			urls.forEach(function (url) {
				window.loadScriptAsync(url);
			});
		}, {once: true});

		var hasNativeWebComponentSupport = 'registerElement' in document && 'import' in document.createElement('link') && 'content' in document.createElement('template');
		var isPolyfillReady = window.WebComponents && window.WebComponents.ready;

		// fire WebComponentsReady event as early as possible
		if (hasNativeWebComponentSupport || isPolyfillReady) {
			window.dispatchEvent(new CustomEvent('WebComponentsReady', {bubbles: false}));
		}
	};
})(window);
