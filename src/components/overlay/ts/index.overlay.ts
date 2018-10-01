  /// <reference types="jquery"/>
  (function(jquery: JQueryStatic, window: any, document: any) {
    const refClasses = {
    };

    class Plugin {
      public static pluginName: string = 'overlayComponent';

      private element: Element;

      constructor(element: Element)
      {
        this.element = element;
        this.init();
      }

      public init() : void {

      }
    }

    jquery.fn[Plugin.pluginName] = function() {
      return this.each(function() {
        const $this = $(this);
        if (!$this.data(Plugin.pluginName)) {
          $this.data(Plugin.pluginName, new Plugin(this));
        }
      });
    };
  })(jQuery, window, document);

