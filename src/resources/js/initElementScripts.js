(function ($) {
	'use strict';

	biotope.configuration.set('initElementFunctions', function () {
		var $elementsWithDataInit = $('[data-init]');
		$elementsWithDataInit.each(function() {
			if ($(this).data('init')) {
				var initFunction = eval($(this).attr('data-init')); // jshint ignore:line
				initFunction($(this));
			}
		});
	});

})(jQuery);
