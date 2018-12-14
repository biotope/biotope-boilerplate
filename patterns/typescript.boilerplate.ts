interface PluginNameOptions {}

class PluginName {
	private element: Element;
	private options: PluginNameOptions;
	private defaults: PluginNameOptions = {};
	constructor(element: Element, options: PluginNameOptions) {
		this.element = element;
		// ⚠️ remove options if you don't use them
		this.options = { ...this.defaults, ...options };
		// init plugin
		this.init();
	}
	private init() {
		// init plugin here
	}
}

window['biotope'] = window['biotope'] || {};

window['biotope'].pluginName = (
	element: HTMLElement,
	options: PluginNameOptions
) => {
	(() => {
		new PluginName(element, options);
	})();
};
