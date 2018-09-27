  /// <reference types="jquery"/>
  import data from '../../page/scaffolding/pageContent';
  (function(jquery: JQueryStatic, window: any, document: any) {
    const refClasses = {
      cardsTopic: '.cards__topic',
      closeModal: '.overlay__close',
    };

    class Plugin {
      public static pluginName: string = 'cardsComponent';

      private element: Element;
      private cardsTopic: HTMLElement[];
      private closeModal: Element;

      constructor(element: Element)
      {
        this.element = element;
        this.cardsTopic = Array.from(this.element.querySelectorAll(refClasses.cardsTopic));

        this.init();
      }

      public init() : void {
        this.cardsTopic.forEach(	
          (element: HTMLElement, index) => element.addEventListener('click', this.showModal(index).bind(this))
        );
      }

      private showModal(index: number) {
        return ({ target }: Event): void => {
          document.getElementsByClassName('overlay')[0].innerHTML +=
          `<div class="overlay__topic">
            <img class="overlay__img" src="${data.cards[index].imgSrc}" alt="">
            <img class="overlay__close" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/VisualEditor_-_Icon_-_Close_-_white.svg/2000px-VisualEditor_-_Icon_-_Close_-_white.svg.png">
            <div class="overlay__content">
              <div class="overlay__primary">
                <div class="overlay__title"> ${data.cards[index].title} </div>
                <div class="overlay__description"> ${data.cards[index].text}</div>
              </div>
              <div class="overlay__secondary">
                <div class="overlay__toVisit">
                  <span class="overlay__toVisitText"> ${data.overlay[0].title} </span> 
                  <div class="overlay__local"> ${data.cards[index].places[0].place1} </div>
                  <div class="overlay__local"> ${data.cards[index].places[0].place2} </div>
                  <div class="overlay__local"> ${data.cards[index].places[0].place3} </div>
                  <div class="overlay__local"> ${data.cards[index].places[0].place4} </div>
                </div>
              </div>
            </div>
          </div>`;

          document.querySelector('.overlay').classList.add('overlay--active');

          this.closeModal = document.querySelector(refClasses.closeModal);
          this.closeModal.addEventListener('click', 
          () => {
            document.querySelector('.overlay').classList.remove('overlay--active');
            document.getElementsByClassName('overlay')[0].innerHTML = '';
          });
        }
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

