class PluginName {
  private element: Element;
  private options: unknown;
  private defaults: any = {
    mood: '😆'
  };
  constructor(element: Element, options: unknown) {
    this.element = element;
    // ⚠️ remove options if you don't use them
    this.options = Object.assign({}, [this.defaults, options])
    // init plugin
		this.init();
  }
  private init() {
    console.log(`we could have some options ${this.options}`)
    this.element.addEventListener('click', () => {
      console.log('clicked element');
    });
  }

}


window['biotope'] = window['biotope'] || {};

window['biotope'].pluginName = (element: HTMLElement) => {
    (() => {
      new PluginName(element,{});
    })()
}
