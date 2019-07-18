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
		/**
		 *
		 * @param template A template string, for example: A green {0} house?
		 * @param formatArray An array with exactly the same amount of elements like placeholders are available in the template.
		 * @returns {string} The formatted string, wrapped in a tooltip, for example: A green <span data-tooltip="Green is a color." class="tooltip"></span>house
		 */
		formatWithTooltip: function (template, formatArray) {
			var formatted = template;

			if(formatArray === undefined) {
				return template;
			}

			for (var i = 0; i < formatArray.length; i++) {

				var regexp = new RegExp('\\{'+i+'\\}', 'gi');
				formatted = formatted.replace(regexp, '<span data-tooltip="' + formatArray[i] + '" class="tooltip"></span>');
			}
			return formatted;
		},
		/**
		 * Checks if the middle of an array is reached.
		 * @param array
		 * @param index
		 * @returns {boolean}
		 */
		isMiddleOfArrayReached: function(array, index){
			var middleOfArray = array.length / 2;
			var middleOfArrayCeiled = Math.ceil(middleOfArray);

			return middleOfArrayCeiled === index;
		},

		/**
		 * Checks if the middle of an array + 1 is reached.
		 * @param array
		 * @param index
		 * @returns {boolean}
		 */
		isMiddleOfArrayReachedAddOne: function(array, index){
			var middleOfArray = array.length / 2;
			var middleOfArrayCeiled = Math.ceil(middleOfArray);

			return middleOfArrayCeiled + 1 === index;
		},

		/**
		 * Executes the block if the index of the array + 1 modulo the given value is 0
		 * @param options
		 * @returns {*}
		 */
		ifIsNthItem: function(options) {
			var index = options.data.index + 1,
				nth = options.hash.nth;

			if (index % nth === 0) {
				return options.fn(this);
			}
		},


		/**
		 * @name .or
		 * @param {...any} `arguments`,
		 * @param `options` Handlebars options object
		 * @return {String} Block, or inverse block if specified and falsey.
		 * @block
		 * @api public
		 */

		or: function(/* any, any, ..., options */) {
			var argLength = arguments.length - 1;
			var options = arguments[argLength];
			var success = false;
			var i = 0;
			while (i < argLength) {
				if (arguments[i]) {
					success = true;
					break;
				}
				i++;
			}
			if (success) {
				return options.fn(this);
			} else {
				return options.inverse(this);
			}
		},

		toInt: function(number) {
			return parseInt(number, 10);
		},

		/**
		 * replace spaces with underscores
		 * @param string
		 * @returns {*}
		 */
		replaceSpaceWithUnderscore: function(string) {
			return string.replace(/ /g, '_');
		},

		/**
		 * return current webtrekk contentId
		 * @returns {*}
		 */
		webtrekkContentId: function() {
			return ui.configuration.webtrekk.initData.contentId;
		},

		/**
		 * @name language
		 * @param {key} language key,
		 * returns a string for a certain language key
		 * @returns {string}
		 */
		language: function(key) {
			return ui.configuration.data.i18n[key];
		},

		is_odd: function(number) {
		  return number % 2;
		}
	};

	for (var helper in helpers) {
		if (helpers.hasOwnProperty(helper)) {
			Handlebars.registerHelper(helper, helpers[helper]);
		}
	}
}));


