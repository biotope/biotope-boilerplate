import {Store} from 'redux';

export class BiotopeComponent extends HTMLElement {
	store: Store;

	constructor(store: Store, ...args: any[]) {
		super(...args);
		this.store = store;
	}
}
