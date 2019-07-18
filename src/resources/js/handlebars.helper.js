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
		/**
		 * {{#compare}}...{{/compare}}
		 *
		 * @credit: OOCSS
		 * @param left value
		 * @param operator The operator, must be between quotes ">", "==", "<=", etc...
		 * @param right value
		 * @param options option object sent by handlebars
		 * @return {String} formatted html
		 *
		 * @example:
		 * {{#compare unicorns "<" ponies}}
		 * I knew it, unicorns are just low-quality ponies!
		 * {{/compare}}
		 *
		 * {{#compare value ">=" 10}}
		 * The value is greater or equal than 10
		 * {{else}}
		 * The value is lower than 10
		 * {{/compare}}
		 */
		compare: function (left, operator, right, options) {
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

		/**
		 * {{#relativeTime}}...{{/relativeTime}}
		 *
		 * @credit: OOCSS
		 * @param timestamp
		 * @return {String} time
		 *
		 */
		relativeTime: function (timestamp) {
			var relTime = moment(timestamp).fromNow();
			return relTime;
		},

		/**
		 * {{#each (limit arr limitValue)}}...{{/each}}
		 *
		 * @credit: OOCSS
		 * @param arr
		 * @param limit
		 * @return {array} limited array
		 *
		 */
		limit: function (arr, limit) {
			if (!jQuery.isArray(arr)) {
				return [];
			}
			return arr.slice(0, limit);
		},

		/**
		 * {{inc @index}}
		 *
		 * @credit: OOCSS
		 * @param val
		 * @return {Number} index
		 *
		 */
		inc: function (val) {
			return parseInt(val, 10) + 1;
		},

		/**
		 * {{#exists myVar}}
		 *
		 * @credit: OOCSS
		 * @param variable
		 * @param options option object sent by handlebars
		 * @return {boolean}
		 *
		 */
		exists: function (variable, options) {
			if (typeof variable !== 'undefined') {
				return options.fn(this);
			} else {
				return options.inverse(this);
			}
		},
	};

	for (var helper in helpers) {
		if (helpers.hasOwnProperty(helper)) {
			Handlebars.registerHelper(helper, helpers[helper]);
		}
	}
}));


