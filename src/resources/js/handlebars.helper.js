/**
 * Collection of custom helpers
 * Grab helpers from: https://github.com/assemble/handlebars-helpers/tree/master/lib/helpers
 */
(function (root, factory) {
	'use strict';
	if (typeof module === 'object' && module.exports) {
		module.exports = factory;
	} else {
		factory(root.Handlebars);
	}
}(this, function (Handlebars) {
	'use strict';

	var helpers = {

		// Add helpers

	};

	for (var helper in helpers) {
		if (helpers.hasOwnProperty(helper)) {
			Handlebars.registerHelper(helper, helpers[helper]);
		}
	}
}));
