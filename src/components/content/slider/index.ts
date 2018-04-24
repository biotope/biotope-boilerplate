import {Slider} from './slider';
import {hyper} from 'hyperhtml/esm';
import {SliderState} from './interfaces/SliderState';
import {setEntryState} from '../../state/core.redux';


(function () {
	'use strict';

	class SliderComponent extends HTMLElement {
		private html: any;
		private slider: any;
		private state: SliderState;

		constructor() {
			super();
			this.html = hyper.bind(this);

			setEntryState('123456', {
				headline: 'Foo',
				previousSlideText: '< Previous',
				nextSlideText: 'Next >',
				images: [
					'https://dummyimage.com/900x300/0000ff/ffffff&text=Slide+1',
					'https://dummyimage.com/900x300/00ff00/ffffff&text=Slide+2',
					'https://dummyimage.com/900x300/ff0000/ffffff&text=Slide+3'
				],
				showNavigation: true,
				startWithSlide: 0
			});

			// Default State
			this.state = {
				headline: 'Foo',
				previousSlideText: '< Previous',
				nextSlideText: 'Next >',
				images: [
					'https://dummyimage.com/900x300/0000ff/ffffff&text=Slide+1',
					'https://dummyimage.com/900x300/00ff00/ffffff&text=Slide+2',
					'https://dummyimage.com/900x300/ff0000/ffffff&text=Slide+3'
				],
				showNavigation: true,
				startWithSlide: 0
			}
		}

		/*
			TODO Tasks

			- Add redux state
			- Move event logic to external file
			- Implement Sub Component for Slider Navigation
			- Implement de-/reHydrate PoC plugin
		 */

		connectedCallback() {
			this.render();
			this.slider = new Slider(this.querySelector(".vjslider"), {});
		}

		slideToNext(e: any) {
			e.preventDefault();
			this.slider.next();
		}

		slideToPrevious(e: any) {
			e.preventDefault();
			this.slider.prev();
		}

		render() {
			return this.html`
				<h1>${this.state.headline}</h1>
                <div class="vjslider">
                	${this.state.images.map(url => ` <div class="vjslider__slide"><img src=${url} alt=""></div>`)}
				</div>
				<ul class="sliderNavigation">
					<li class="sliderNavigation__element">
							<button class="js-prev" onclick=${(e:any) => {this.slideToPrevious(e)}}>
							${this.state.previousSlideText}
						</button>
					</li>
					<li class="sliderNavigation__element">
						<button class="js-next" onclick=${(e:any) => {this.slideToNext(e)}}>
							${this.state.nextSlideText}
						</button>
					</li>
				</ul>
            `;
		}
	}

	if (!customElements.get('slider-component')) {
		customElements.define('slider-component', SliderComponent);
	}
})();

