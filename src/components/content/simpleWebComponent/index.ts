import {hyper} from 'hyperhtml/esm';
import {BiotopeReduxStore} from "../../core/BiotopeReduxStore";
import {setEntryState} from "../../state/core.redux";

export class CustomComponent extends HTMLElement {
	private html: any;
	private counter: number;
	private uid: string;
	private store: any;

	constructor() {
		super();
		this.html = hyper.bind(this);
		this.counter = 666;

		// grab some unique ID from somewhere
		this.uid = '123';
		this.store = new BiotopeReduxStore(window['biotope'].store, this.uid, this.onStateChange);

		// debugging only
		console.log(this.store.getState());

		this.store.dispatch(setEntryState(this.uid, {
			'test': true
		}));

		this.store.dispatch(setEntryState(this.uid, {
			'test': true
		}));

		console.log(this.store.getState());
	}

	onStateChange(state: any, lastState: any) {
		console.log('onStateChange', state, lastState);
		// this.render(state);
	}

	getUid() {
		return this.uid;
	}

	connectedCallback() {
		this.render();

		document.addEventListener('state', (e: any) => {
			this.counter = e.detail.counter;
			this.render();
		});

		document.dispatchEvent(new CustomEvent('trigger.state'));
	}

	countUp() {
		console.log('COUNT_UP');
		document.dispatchEvent(new CustomEvent('action', { detail: { type: 'COUNT_UP' }}));
	}

	render() {
		return this.html`
<button onclick=${this.countUp}>Count Up</button>
<span>${this.counter}</span>
`;
	}
}

if (!customElements.get('custom-component')) {
	customElements.define('custom-component', CustomComponent);
}
