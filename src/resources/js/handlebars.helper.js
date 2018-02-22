/**
 * Collection of custom helpers
 * Grab helpers from: https://github.com/assemble/handlebars-helpers/tree/master/lib/helpers
 */
(function (root, factory) {
	'use strict';
	if (typeof module === 'object' && module.exports) {
		module.exports = factory(require('handlebars'));
	} else {
		factory(root.Handlebars);
	}
}(this, function (Handlebars) {
	'use strict';

	var helpers = {
		/**
		 * {{#helperCompare}}...{{/compare}}
		 *
		 * @credit: OOCSS
		 * @param left value
		 * @param operator The operator, must be between quotes ">", "=", "<=", etc...
		 * @param right value
		 * @param options option object sent by handlebars
		 * @return {String} formatted html
		 *
		 * @example:
		 * {{#helperCompare unicorns "<" ponies}}
		 * I knew it, unicorns are just low-quality ponies!
		 * {{/compare}}
		 *
		 * {{#helperCompare value ">=" 10}}
		 * The value is greater or equal than 10
		 * {{else}}
		 * The value is lower than 10
		 * {{/compare}}
		 */
		helperCompare: function (left, operator, right, options) {
			/*jshint eqeqeq: false*/
			if (arguments.length < 3) {
				throw new Error('Handlebars Helper "compare" needs 2 parameters');
			}
			if (options === undefined) {
				options = right;
				right = operator;
				operator = '===';
			}
			var operators = {
				'==': function (l, r) {
					return l == r;
				},
				'===': function (l, r) {
					return l === r;
				},
				'!=': function (l, r) {
					return l != r;
				},
				'!==': function (l, r) {
					return l !== r;
				},
				'<': function (l, r) {
					return l < r;
				},
				'>': function (l, r) {
					return l > r;
				},
				'<=': function (l, r) {
					return l <= r;
				},
				'>=': function (l, r) {
					return l >= r;
				},
				'typeof': function (l, r) {
					return typeof l == r;
				}
			};
			if (!operators[operator]) {
				throw new Error('Handlebars Helper "compare" doesn\'t know the operator ' + operator);
			}
			var result = operators[operator](left, right);
			if (result) {
				return options.fn(this);
			} else {
				return options.inverse(this);
			}
		},

		helperDef: function(variable, defaultValue) {
			return variable ? variable : defaultValue;
		}

	};

	for (var helper in helpers) {
		if (helpers.hasOwnProperty(helper)) {
			Handlebars.registerHelper(helper, helpers[helper]);
		}
	}
}));
