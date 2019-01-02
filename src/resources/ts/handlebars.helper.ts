/**
 * Collection of custom helpers
 * Grab helpers from: https://github.com/assemble/handlebars-helpers/tree/master/lib/helpers
 */
((root, factory) => {
	'use strict';
	if (typeof module === 'object' && module.exports) {
		module.exports = factory;
	} else {
		factory(root.Handlebars);
	}
})(this, (Handlebars) => {
	'use strict';

	const helpers = {

	};

	for (let helper in helpers) {
		if (helpers.hasOwnProperty(helper)) {
			Handlebars.registerHelper(helper, helpers[helper]);
		}
	}
});
