  /// <reference types="jquery"/>
  import data from '../../page/scaffolding/pageContent';
  (function(jquery: JQueryStatic, window: any, document: any) {

    class Plugin {
      public static pluginName: string = 'pageComponent';

      private element: Element;

      constructor(element: Element)
      {
        this.element = element;

        this.init();
      }

      public init() : void {
        data.cards.forEach((el:any) => {
          document.getElementsByClassName('cards')[0].innerHTML +=
            `<div 
             class="cards__topic" 
             style="background: linear-gradient(to bottom, rgba(0,0,0,.75),rgba(0,0,0,0), rgba(0,0,0,.88)),
             url('${el.imgSrc}') no-repeat center/cover;">
              <div class="cards__date">${el.date}</div>
              <div class="cards__content">
                <h2 class="cards__title"> ${el.title} </h2>
                <p class="cards__description"> ${el.description} </p>
              </div>
            </div>`
        });
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

