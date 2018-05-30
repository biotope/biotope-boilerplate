import {hyper} from 'hyperhtml/esm';
import {BiotopeReduxStoreConnector} from "../../core/BiotopeReduxStoreConnector";
import SimpleComponentReducerCreator from './Boilerplate.reducer';
import {BoilerplateState} from './BoilerplateState';

export class Boilerplate extends HTMLElement {
	static componentName = 'biotope-boilerplate';
	private html: any;
	private uid: string;
	private storeConnector: BiotopeReduxStoreConnector<BoilerplateState>;

	constructor() {
		super();
		this.html = hyper.bind(this);
	}

	connectedCallback() {
		this.storeConnector = new BiotopeReduxStoreConnector({
			store: window['biotope'].store,
			componentId: this.uid,
			reducerCreator: SimpleComponentReducerCreator,
			triggerOnStateChange: (state: BoilerplateState, lastState: BoilerplateState) => {}
		});
		this.uid = this.storeConnector.getComponentId();
	}
}

if (!customElements.get(Boilerplate.componentName)) {
	customElements.define(Boilerplate.componentName, Boilerplate);
}
