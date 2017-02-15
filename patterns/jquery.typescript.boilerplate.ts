/// <reference path="../typings/globals/jquery/index.d.ts" />

(function($: JQueryStatic, window: any, document: any) {

	/**
	 * A sample jQuery plugin written in Typescript.
	 */
	class Plugin
	{
		public static NAME: string = 'pluginName';

		private element: Element;
		private $element: JQuery;
		private options: any;
		private defaults: any = {
			option1: 'change this'
		};

		/**
		 * Initializes a new instance of the plugin.
		 *
		 * @param element   The DOM element.
		 * @param options   Plugin options.
		 */
		constructor(element: Element, options: any)
		{
			var self = this;

			self.element = element;
			self.$element = $(element);

			// extend default options
			self.options = $.extend({}, self.defaults, options);

			// init plugin
			self.init();
		}

		/**
		 * Initialization.
		 */
		public init() : void
		{
			var self = this;

			console.log('init typescript boilerplate plugin');

			self.$element.on('click', () => {
				console.log('clicked element');
			});
		}
	}

	$.fn[Plugin.NAME] = function(options: any) {

		return this.each(function() {
			let $this = $(this);
			if(!$this.data(Plugin.NAME)) {
				$this.data(Plugin.NAME, new Plugin(this, options));
			}
		});

	};

})(jQuery, window, document);
