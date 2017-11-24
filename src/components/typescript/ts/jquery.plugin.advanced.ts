///<reference types="jquery"/>

import { BoilerplateOptions } from './advanced/interfaces/BoilerplateOptions';
import { JQueryPluginBase } from 'jquery-base';
import EventHelper from 'jquery-events';
import Demo from './advanced/Demo';

(function ($: JQueryStatic, window: any, document: any) {

	class Plugin extends JQueryPluginBase {

		/** The plugins name */
		public static NAME: string = 'advanced';

		/** Set plugins default options defined in given interface */
		public static DEFAULTS: BoilerplateOptions = {};

		/** Demo variable for usage in destroy method */
		public demo: Demo;

		/** The plugins constructor - always load base class (JQueryPluginBase) first */
		constructor(element: Element, options: any) {
			super(Plugin.NAME, element, Plugin.DEFAULTS, options);
		}

		/** Place initialization logic here */
		init(): void {
			console.log('Plugin init() - foo = '+this.options.foo);

			// demo listeners for jquery-plugin-events.wrapEvents helper
			this.$element.on('before.test', (e, param) => {
				console.log('before test = '+param);
				// e.preventDefault();
			});

			this.$element.on('after.test', (e, param) => {
				console.log('after test = '+param);
			});

			// EventHelper wrapEvents demo
			EventHelper.wrapEvents(
				this.$element,
				'test',
				$.proxy(this.eventDemo, this, ['proxy param']),
				['event param']
			);
		}

		/** demo function */
		eventDemo(param: string) : void {
			console.log('proxy demo with param = ' + param);
			this.demo = new Demo();
			this.demo.test(this.$element);
		}

		/** local destroy overwrites JQueryPluginBase destroy method */
		destroy(): void {
			// custom destroy calls
			console.log('plugin destroy');
			this.demo.destroy();

			// call destroy function of parent class as last call to reset element to initial state
			super.destroy();
		}
	}

	/** Attach plugin to jQuery fn namespace */
	$.fn[Plugin.NAME] = function (options: any) {
		return this.each(function () {
			let $this = $(this);
			if (!$this.data(Plugin.NAME)) {
				$this.data(Plugin.NAME, new Plugin(this, options));
			}
		});
	};

})(jQuery, window, document);

//@ sourceURL=jquery.plugin.advanced.js
