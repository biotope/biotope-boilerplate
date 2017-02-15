(function () {
	'use strict';

	// global user agent vars for ios
	global.configuration.set('global.iOS', navigator.userAgent.match(/(iPad|iPhone|iPod)/g) && !navigator.userAgent.match(/(Windows Phone)/g));
	global.configuration.set('global.iOS7', / os 7_/.test(navigator.userAgent.toLowerCase()));

	// detect Safari
	global.configuration.set('global.safari', navigator.userAgent.search('Safari') >= 0 && navigator.userAgent.search('Chrome') < 0);

	// detect IE mobile
	global.configuration.set('global.IEMobile', navigator.userAgent.match(/iemobile/i));

	// global user agent vars for ie
	if (window.navigator.userAgent.indexOf('MSIE ') > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
		global.configuration.set('global.IE', true);
		$('html').addClass('ie');
	} else {
		global.configuration.set('global.IE', false);
	}

	// better touch detection
	global.configuration.set('global.touch', (Modernizr.touch || 'ontouchstart' in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0));

})();
