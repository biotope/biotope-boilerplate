import {hyper} from 'hyperhtml/esm';
import {BiotopeReduxStoreConnector} from "../../core/BiotopeReduxStoreConnector";
import {createInitialSimpleComponentState, SimpleComponentState} from './SimpleComponentState';
import SimpleComponentReducerCreator from './SimpleComponent.reducer';
import {countUp} from './SimpleComponent.actions';

export class SimpleComponent extends HTMLElement {
	static componentName: string = 'simple-component';
	private html: any;
	private uid: string;
	private storeConnector: BiotopeReduxStoreConnector<SimpleComponentState>;

	constructor() {
		super();
		this.html = hyper.bind(this);
	}

	connectedCallback() {
		this.storeConnector = new BiotopeReduxStoreConnector({
			store: window['biotope'].store,
			componentId: this.uid,
			reducerCreator: SimpleComponentReducerCreator,
			triggerOnStateChange: (state: SimpleComponentState, lastState: SimpleComponentState) => this.onStateChange(state, lastState)
		});
		this.uid = this.storeConnector.getComponentId();

		// TODO add helpers for initial state injection
		// JSON-LD
		// Attributes
		// Rehydrate

		this.render(createInitialSimpleComponentState());
	}

	countUp() {
		console.log('dispatching COUNT_UP reducer');
		this.storeConnector.dispatch(countUp(this.uid));
	}

	onStateChange(state: SimpleComponentState = {counter: 0}, lastState: SimpleComponentState) {
		console.log('onStateChange', state, lastState);
		this.render(state);
	}

	render(state: SimpleComponentState) {
		return this.html`
			<button onclick=${this.countUp.bind(this)}>Count Up</button>
			<span>${state.counter}</span>
		`;
	}
}

if (!customElements.get(SimpleComponent.componentName)) {
	customElements.define(SimpleComponent.componentName, SimpleComponent);
}
