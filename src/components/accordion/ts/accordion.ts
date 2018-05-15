///<reference types="jquery"/>

(function($: JQueryStatic, window: any, document: any) {
	/**
	 * A sample jQuery plugin written in Typescript.
	 */
	class Plugin {
		public static NAME: string = 'simple';

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
		constructor(element: Element, options: any) {
			this.element = element;
			this.$element = $(element);

			// extend default options
			this.options = $.extend({}, this.defaults, options);

			// init plugin
			this.init();
		}

		/**
		 * Initialization.
		 */
		public init(): void {
			console.log('init typescript demo plugin');

			this.$element
				.append('Done!')
				.css('backgroundColor', 'lightcoral')
				.on('click', () => {
					console.log('clicked element');
					this.$element.css('backgroundColor', 'green');
				});
		}
	}

	$.fn[Plugin.NAME] = function(options: any) {
		return this.each(function() {
			let $this = $(this);
			if (!$this.data(Plugin.NAME)) {
				$this.data(Plugin.NAME, new Plugin(this, options));
			}
		});
	};
})(jQuery, window, document);
