/* initialization of configuration getter and setter methods, use this methods to get and set configuration values */

(function (ffglobal, allowPredefinedData) {
	'use strict';

	/*jshint -W020 */
	window.ffglobal = ffglobal;
	ffglobal.configuration = ffglobal.configuration || {};
	if (typeof ffglobal.configuration.data === 'undefined') {
		ffglobal.configuration.data = {};
	} else {
		if (allowPredefinedData === true) {
			// reset everything but data
			var tempData = ffglobal.configuration.data;
			ffglobal.configuration = {data: tempData};
		} else {
			ffglobal.configuration.data = {};
		}
	}

	// configuration functions
	ffglobal.configuration.set = function (key, value) {
		var tempKeys = key.split('.');
		if (tempKeys.length === 2) {
			if (typeof ffglobal.configuration.data[tempKeys[0]] === 'undefined') {
				ffglobal.configuration.data[tempKeys[0]] = {};
			}
			ffglobal.configuration.data[tempKeys[0]][tempKeys[1]] = value;
			return true;
		}
		ffglobal.configuration.data[tempKeys[0]] = value;
		return true;
	};

	ffglobal.configuration.get = function (key) {
		var tempKeys = key.split('.');
		if (tempKeys.length === 2) {
			if (typeof ffglobal.configuration.data[tempKeys[0]] === 'undefined' || typeof ffglobal.configuration.data[tempKeys[0]][tempKeys[1]] === 'undefined') {
				return null;
			}
			return ffglobal.configuration.data[tempKeys[0]][tempKeys[1]];
		}
		if (typeof ffglobal.configuration.data[tempKeys[0]] === 'undefined') {
			return null;
		}
		return ffglobal.configuration.data[tempKeys[0]];
	};

})(window.ffglobal || {}, true);
