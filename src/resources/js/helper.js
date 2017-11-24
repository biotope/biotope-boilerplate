(function () {
	'use strict';

	// global user agent vars for ios
	ffglobal.configuration.set('ffglobal.iOS', navigator.userAgent.match(/(iPad|iPhone|iPod)/g) && !navigator.userAgent.match(/(Windows Phone)/g));
	ffglobal.configuration.set('ffglobal.iOS7', / os 7_/.test(navigator.userAgent.toLowerCase()));

	// detect Safari
	ffglobal.configuration.set('ffglobal.safari', navigator.userAgent.search('Safari') >= 0 && navigator.userAgent.search('Chrome') < 0);

	// detect IE mobile
	ffglobal.configuration.set('ffglobal.IEMobile', navigator.userAgent.match(/iemobile/i));

	// global user agent vars for ie
	if (window.navigator.userAgent.indexOf('MSIE ') > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
		ffglobal.configuration.set('ffglobal.IE', true);
		$('html').addClass('ie');
	} else {
		ffglobal.configuration.set('ffglobal.IE', false);
	}

	// better touch detection
	ffglobal.configuration.set('ffglobal.touch', (Modernizr.touch || 'ontouchstart' in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0));

})();
