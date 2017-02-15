/* initialization of configuration getter and setter methods, use this methods to get and set configuration values */
(function (allowPredefinedData) {
	'use strict';

	/*jshint -W020 */
	global = global || {};
	global.configuration = global.configuration || {};
	if (typeof global.configuration.data === 'undefined') {
		global.configuration.data = {};
	} else {
		if (allowPredefinedData === true) {
			// reset everything but data
			var tempData = global.configuration.data;
			global.configuration = {data: tempData};
		} else {
			global.configuration.data = {};
		}
	}

	// configuration functions
	global.configuration.set = function (key, value) {
		var tempKeys = key.split('.');
		if (tempKeys.length === 2) {
			if (typeof global.configuration.data[tempKeys[0]] === 'undefined') {
				global.configuration.data[tempKeys[0]] = {};
			}
			global.configuration.data[tempKeys[0]][tempKeys[1]] = value;
			return true;
		}
		global.configuration.data[tempKeys[0]] = value;
		return true;
	};

	global.configuration.get = function (key) {
		var tempKeys = key.split('.');
		if (tempKeys.length === 2) {
			if (typeof global.configuration.data[tempKeys[0]] === 'undefined' || typeof global.configuration.data[tempKeys[0]][tempKeys[1]] === 'undefined') {
				return null;
			}
			return global.configuration.data[tempKeys[0]][tempKeys[1]];
		}
		if (typeof global.configuration.data[tempKeys[0]] === 'undefined') {
			return null;
		}
		return global.configuration.data[tempKeys[0]];
	};

})(true);
