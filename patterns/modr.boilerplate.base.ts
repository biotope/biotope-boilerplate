///<reference path="../../../node_modules/modr-typescript/src/js/modr.core.loader.ts"/>
///<reference path="../../../node_modules/modr-typescript/src/js/modr.interface.jqueryplugin.ts"/>
///<reference path="../../../node_modules/modr-typescript/src/js/modr.interface.jqueryplugin.ts"/>

namespace Modr.Boilerplate {
	export class Base implements Modr.Interface.JQueryPlugin {

		public $element:JQuery;
		public options = {
			foo: 'bar'
		};

		public _dependencies = {
			config1: {
				resources: [
					{
						paths: ['modr.boilerplate.module.js']
					}
				],
				modr: [
					{name: 'Demo', module: 'Module'}
				],
				init: function ($element?:JQuery) {
					console.log('do something');
				},
				test: function () {
					return true;
				}
			}
		};

		constructor($element:JQuery, options:any) {
			this.$element = $element;
			this.options = $.extend({}, this.options, options);
		}

		/**
		 * default init method
		 */
		public init():void {
			let self = this;
			self.$element.append(' => Done - Option "foo" = "' + self.options.foo + '"');
			Modr.Core.Loader.load(self._dependencies.config1, self.$element);
		}

		/**
		 * default destroy method
		 */
		public destroy():void {
		}
	}
}
