import {Store} from "redux";
import {EntryAction} from "../state/EntryAction";

export interface BiotopeStoreConfiguration {
	store: Store,
	componentId?: string,
	triggerOnStateChange?: Function
}

export interface BiotopeStore {
	lastState: any;
	config: BiotopeStoreConfiguration;

	getState(store: Store, id?: string): any;
	dispatch(state: any): EntryAction;
	subscribe(store: Store, id: string, triggerOnStateChange: Function): void;

	getComponentId(): string;
}
