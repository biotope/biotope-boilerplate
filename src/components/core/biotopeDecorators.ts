import {Store} from "redux";
import {setEntryState} from "../state/core.redux";
import {EntryAction} from "../state/EntryAction";

interface BiotopeStore {
	lastState: any;
	store: Store;
	id: string;
	triggerOnStateChange?: Function;

	getState(store: Store, id?: string): any;
	dispatch(state: any): EntryAction;
	subscribe(store: Store, id: string, triggerOnStateChange: Function): void;
}

export class BiotopeReduxStore implements BiotopeStore {
	lastState: any;

	constructor(
		public store: Store,
		public id: string,
		public triggerOnStateChange?: Function
	) {
		this.subscribe(store, id, triggerOnStateChange);
	}

	getState(store: Store, id?: string): any {
		const state = this.store.getState();
		return id ? state.entries[id] : state;
	}

	dispatch(state: any): EntryAction {
		return this.store.dispatch(setEntryState(this.id, state));
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
