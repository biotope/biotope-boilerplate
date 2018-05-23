import {Store} from "redux";
import {setEntryState} from "../state/core.redux";
import {EntryAction} from "../state/EntryAction";
import {BiotopeStore, BiotopeStoreConfiguration} from "./BiotopeStore";

export class BiotopeReduxStore implements BiotopeStore {
	lastState: any;
	config: BiotopeStoreConfiguration

	constructor(config: BiotopeStoreConfiguration) {
		this.config = config;		

		if(!this.config.componentId) {
			this.config.componentId = this.generateUniqueId();
		}

		this.subscribe(
			this.config.store, 
			this.config.componentId, 
			this.config.triggerOnStateChange
		);
	}

	getState(store: Store, componentId?: string): any {
		const state = this.config.store.getState();
		return componentId ? state.entries[componentId] : state;
	}

	dispatch(state: any): EntryAction {
		return this.config.store.dispatch(setEntryState(this.config.componentId, state));
	}

	subscribe(store: Store, componentId: string, triggerOnStateChange: Function) {
		store.subscribe(() => {
			const state = this.getState(store, componentId);

			if (this.config.triggerOnStateChange) {
				this.config.triggerOnStateChange(state, this.lastState);
			}
		});
	}

	generateUniqueId(): string {
		let uniqueId: string;

		do {
			uniqueId = `uid-${Date.now()}-${Math.floor(Math.random() * 999999999)}`;
		} while(this.config.store.getState().entries[uniqueId])

		return uniqueId;
	}

	getComponentId(): string {
		return this.config.componentId;
	}
}
