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
          (element: HTMLElement, index) => element.addEventListener('click', () => this.showModal(index)));

          const query = window.location.search.substr(1).split('&').reduce((accumulator: any, item: any) => ({
            ...accumulator,
            [item.split('=')[0]]: item.split('=')[1] || '',
          }), {});

          const backLink = query.city;

          data.cards.forEach((element: any) => {
            if(element.url == backLink){
              this.showModal(element.index)
            } 
          });
      }

      private showModal(index: number) {
        const overlay =  document.getElementsByClassName('overlay')[0];
        const dataOverlay = data.cards[index];
         overlay.innerHTML =
          `<div class="overlay__topic">
            <img class="overlay__img" src="${dataOverlay.imgSrc}" alt="">
            <img class="overlay__close" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/VisualEditor_-_Icon_-_Close_-_white.svg/2000px-VisualEditor_-_Icon_-_Close_-_white.svg.png">
            <div class="overlay__content">
              <div class="overlay__primary">
                <div class="overlay__title"> ${dataOverlay.title} </div>
                <div class="overlay__description"> ${dataOverlay.text}</div>
              </div>
              <div class="overlay__secondary">
                <div class="overlay__toVisit">
                  <span class="overlay__toVisitText"> ${data.overlay[0].title} </span> 
                  <div class="overlay__local"> ${dataOverlay.places[0].place1} </div>
                  <div class="overlay__local"> ${dataOverlay.places[0].place2} </div>
                  <div class="overlay__local"> ${dataOverlay.places[0].place3} </div>
                  <div class="overlay__local"> ${dataOverlay.places[0].place4} </div>
                </div>
              </div>
            </div>
          </div>`;

          let newUrl = `?city=${data.cards[index].url}`;
          
          window.history.pushState('', '', newUrl); 

          overlay.classList.add('overlay--active');

          this.closeModal = document.querySelector(refClasses.closeModal);
          this.closeModal.addEventListener('click', 
          () => {
            overlay.classList.remove('overlay--active');
            overlay.innerHTML = '';
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

