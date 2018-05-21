import {Store} from "redux";
import {setEntryState} from "../state/core.redux";
import {EntryAction} from "../state/EntryAction";
import {BiotopeStore, BiotopeStoreConfiguration} from "./BiotopeStore";


export class BiotopeReduxStore implements BiotopeStore {
	lastState: any;
	config: BiotopeStoreConfiguration

	constructor(config: BiotopeStoreConfiguration) {
		this.config = config;		
		this.subscribe(
			this.config.store, 
			this.config.componentId, 
			this.config.triggerOnStateChange
		);
	}

	getState(store: Store, id?: string): any {
		const state = this.config.store.getState();
		return id ? state.entries[id] : state;
	}

	dispatch(state: any): EntryAction {
		return this.config.store.dispatch(setEntryState(this.config.componentId, state));
	}

	subscribe(store: Store, id: string, triggerOnStateChange: Function) {
		store.subscribe(() => {
			const state = this.getState(store, id);

			if (triggerOnStateChange) {
				triggerOnStateChange(state, this.lastState);
			}
		});
	}
}
