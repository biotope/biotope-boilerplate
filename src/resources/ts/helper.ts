{
	'use strict';

	// global user agent vars for ios
	biotope.configuration.set('biotope.iOS', navigator.userAgent.match(/(iPad|iPhone|iPod)/g) && !navigator.userAgent.match(/(Windows Phone)/g));
	biotope.configuration.set('biotope.iOS7', / os 7_/.test(navigator.userAgent.toLowerCase()));

	// detect Safari
	biotope.configuration.set('biotope.safari', navigator.userAgent.search('Safari') >= 0 && navigator.userAgent.search('Chrome') < 0);

	// detect IE mobile
	biotope.configuration.set('biotope.IEMobile', navigator.userAgent.match(/iemobile/i));

	// global user agent vars for ie
	if (window.navigator.userAgent.indexOf('MSIE ') > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
		biotope.configuration.set('biotope.IE', true);
		document.querySelector('html').classList.add('ie');
	} else {
		biotope.configuration.set('biotope.IE', false);
	}

	// better touch detection
	biotope.configuration.set('biotope.touch', (Modernizr.touchevents || 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0));

}
