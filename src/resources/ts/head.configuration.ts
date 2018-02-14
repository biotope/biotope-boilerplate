/* initialization of configuration getter and setter methods, use this methods to get and set configuration values */

import {deepSet} from './helper/deepSet';
import {deepGet} from './helper/deepGet';

(function (ffglobal = {}, allowPredefinedData) {
	'use strict';

	/*jshint -W020 */
	window['ffglobal'] = ffglobal;

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
	ffglobal.configuration.set = function (key: string, value: any) {
		ffglobal.configuration.data = deepSet(ffglobal.configuration.data, key, value);
		return deepGet(ffglobal.configuration.data, key) === value;
	};

	ffglobal.configuration.get = function (key: string) {
		return deepGet(ffglobal.configuration.data, key);
	};

})(window['ffglobal'], true);
