import {Slider} from './slider';
import {hyper} from 'hyperhtml/esm';
import {SliderState} from './interfaces/SliderState';
import {setEntryState} from '../../state/core.redux';
import {BiotopeComponent} from '../../core/BiotopeComponent';
import {registerComponent} from '../../core/registerComponent';
import {Store} from 'redux';


registerComponent((store: Store): any =>
	class SliderComponent extends BiotopeComponent {
		private html: any;
		private slider: any;
		private state: SliderState;
		private cache: SliderState;

		constructor() {
			super(store);
			this.html = hyper.bind(this);

			this.initStore(this.store, '123456', {
				headline: 'Foo',
				previousSlideText: '< Previous',
				nextSlideText: 'Next >',
				images: [
					'https://dummyimage.com/900x300/0000ff/ffffff&text=Slide+1',
					'https://dummyimage.com/900x300/00ff00/ffffff&text=Slide+2',
					'https://dummyimage.com/900x300/ff0000/ffffff&text=Slide+3'
				],
				showNavigation: true,
				startWithSlide: 0,
				currentSlide: 0
			})


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
			const newState = {
				...this.cache,
				currentSlide: this.cache.currentSlide - 1
			};
			this.store.dispatch(setEntryState('123456', newState));
			this.slider.next();
		}

		slideToPrevious(e: any) {
			e.preventDefault();
			this.slider.prev();
		}

		initStore(store: Store, id: string, initialState: SliderState) {
			this.subscribeToStore(store, id);
			store.dispatch(setEntryState(id, initialState));
		}

		subscribeToStore(store: Store, id: string) {
			store.subscribe(() => {
				const state = store.getState().entries[id];
				if(state !== this.cache) {
					this.onStateChange(state);
				}
			});
		}

		onStateChange(state: SliderState) {
			debugger
		}

		render() {
			const state = this.store.getState().entries['123456'];
			return this.html`
				<h1>${state.headline}</h1>
                <div class="vjslider">
                	${state.images.map((url: any) => ` <div class="vjslider__slide"><img src=${url} alt=""></div>`)}
				</div>
				<ul class="sliderNavigation">
					<li class="sliderNavigation__element">
							<button class="js-prev" onclick=${(e:any) => {this.slideToPrevious(e)}}>
							${state.previousSlideText}
						</button>
					</li>
					<li class="sliderNavigation__element">
						<button class="js-next" onclick=${(e:any) => {this.slideToNext(e)}}>
							${state.nextSlideText}
						</button>
					</li>
				</ul>
            `;
		}
	});

