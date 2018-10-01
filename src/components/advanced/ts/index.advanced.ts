  /// <reference types="jquery"/>
	(function(jquery: JQueryStatic, window: any, document: any) {
		const themes: string[] = ['lightTheme', 'darkTheme'];
		/**
		 * A sample jQuery plugin written in Typescript.
		 */
	
		const refClasses = {
			tabMenuContent: '.tabMenu__content',
			tabMenuLink: '.tabMenu__link',
			theme: '.themeModifier',
		};
	
		class Plugin {
			public static pluginName: string = 'tabMenuComponent';
	
			private element: Element;
			private tabMenuLink: HTMLElement[];
			private tabMenuContent: HTMLElement[];
			private theme: HTMLElement;
			private currentTheme: number = -1;
			/**
			 * Initializes a new instance of the plugin.
			 *
			 * @param element   The DOM element.
			 */
			constructor(element: Element)
			{
				this.element = element;
				this.tabMenuLink = 	Array.from(this.element.querySelectorAll(refClasses.tabMenuLink));
				this.tabMenuContent = Array.from(this.element.querySelectorAll(refClasses.tabMenuContent));
				this.theme = this.element.querySelector(refClasses.theme);
				this.init();
			}
	
			/**
			 * Initialization.
			 */
			public init() : void {
				this.tabMenuLink.forEach(
					(element: HTMLElement) => element.addEventListener('click', this.showTab.bind(this))
				);

				this.theme.addEventListener('click', this.changeTheme.bind(this));
			}

			private showTab({ target }: Event): void {
				const btn = (target as HTMLElement);
				btn.classList.add('cards__topic--active');
				this.tabMenuLink.forEach((element: HTMLElement ) => {
					element.classList.remove('tabMenu__link--active');
				});
				btn.classList.add('tabMenu__link--active');
				
				this.tabMenuContent.forEach((element: HTMLElement) => {
					const index = btn.classList[1].split('--')[1];
					element.classList.contains(`tabMenu__content--${index}`)
					? element.classList.add('tabMenu__content--active') 
					: element.classList.remove('tabMenu__content--active')
				});
			}

			private changeTheme(): void {
				this.element.classList.remove(`tabMenu--${themes[this.currentTheme]}`);
				
				this.currentTheme = this.currentTheme + 1 < themes.length
					? this.currentTheme + 1
					: -1;

				if(themes[this.currentTheme]) {
					this.element.classList.add(`tabMenu--${themes[this.currentTheme]}`);
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

