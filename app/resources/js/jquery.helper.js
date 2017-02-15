/**
 * @name              ui jquery helper functions
 * @package           html-css-js
 * @author            JR, VI
 */

(function ($) {
	'use strict';

	var triggeredEvents = [];

	$.extend({
		getWindowWidth: function () {
			return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		},

		triggerFailsafeEvent: function ($element, eventType) {
			// add event to failsafe event queue
			var i = triggeredEvents.length;
			var addToQueue = true;
			while (i--) {
				if (triggeredEvents[i].element === $element.get(0) && triggeredEvents[i].eventType === eventType) {
					addToQueue = false;
					break;
				}
			}

			if (addToQueue) {
				triggeredEvents.push({
					element: $element.get(0),
					eventType: eventType
				});
			}

			// trigger event
			$element.trigger(eventType);
		},

		attachFailsafeEvent: function ($element, eventTypes, func) {
			// attach event type for future invocations
			$element.on(eventTypes, func);

			// check queue for already triggered events
			var i = triggeredEvents.length;
			while (i--) {
				if (triggeredEvents[i].element === $element.get(0) && $.inArray(triggeredEvents[i].eventType, eventTypes.split(' ')) > -1) {
					// execute function
					func.call();
					return true;
				}
			}

			return false;
		}
	});

})(jQuery);
