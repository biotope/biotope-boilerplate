import {hyper} from 'hyperhtml/esm';
import {BiotopeReduxStore} from "../../core/BiotopeReduxStore";
import {setEntryState} from "../../state/core.redux";
import { SimpleComponentState } from './SimpleComponentState';

export class SimpleComponent extends HTMLElement {
	private html: any;
	private uid: string;
	private store: any;

	constructor() {
		super();
		this.html = hyper.bind(this);
	}

	connectedCallback() {
		this.store = new BiotopeReduxStore({
			store: window['biotope'].store,
			componentId: this.uid,
			triggerOnStateChange: (state: SimpleComponentState, lastState: SimpleComponentState) => this.onStateChange(state, lastState)
		});

		this.uid = this.store.getComponentId();

		// TODO add helpers for initial state injection 
		// JSON-LD
		// Attributes
		// Rehydrate
		
		this.store.dispatch(setEntryState(this.uid, {
			counter: 123
		}));
		// console.log(this.store.getState());
	}

	countUp() {
		// TODO dispatch COUNT_UP reducer 
		console.log('dispatch COUNT_UP reducer');
	}

	onStateChange(state: SimpleComponentState, lastState: SimpleComponentState) {
		console.log('onStateChange', state, lastState);
		this.render(state);
	}

	render(state: SimpleComponentState) {
		return this.html`
<button onclick=${this.countUp}>Count Up</button>
<span>${state.counter}</span>
`;
	}
}

if (!customElements.get('simple-component')) {
	customElements.define('simple-component', SimpleComponent);
}
