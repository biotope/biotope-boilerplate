/* initialization of configuration getter and setter methods, use this methods to get and set configuration values */

(function (biotope, allowPredefinedData) {
	'use strict';

	/*jshint -W020 */
	window.biotope = biotope;
	biotope.configuration = biotope.configuration || {};
	if (typeof biotope.configuration.data === 'undefined') {
		biotope.configuration.data = {};
	} else {
		if (allowPredefinedData === true) {
			// reset everything but data
			var tempData = biotope.configuration.data;
			biotope.configuration = {data: tempData};
		} else {
			biotope.configuration.data = {};
		}
	}

	// configuration functions
	biotope.configuration.set = function (key, value) {
		var tempKeys = key.split('.');
		if (tempKeys.length === 2) {
			if (typeof biotope.configuration.data[tempKeys[0]] === 'undefined') {
				biotope.configuration.data[tempKeys[0]] = {};
			}
			biotope.configuration.data[tempKeys[0]][tempKeys[1]] = value;
			return true;
		}
		biotope.configuration.data[tempKeys[0]] = value;
		return true;
	};

	biotope.configuration.get = function (key) {
		var tempKeys = key.split('.');
		if (tempKeys.length === 2) {
			if (typeof biotope.configuration.data[tempKeys[0]] === 'undefined' || typeof biotope.configuration.data[tempKeys[0]][tempKeys[1]] === 'undefined') {
				return null;
			}
			return biotope.configuration.data[tempKeys[0]][tempKeys[1]];
		}
		if (typeof biotope.configuration.data[tempKeys[0]] === 'undefined') {
			return null;
		}
		return biotope.configuration.data[tempKeys[0]];
	};

})(window.biotope || {}, true);
