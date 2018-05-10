import {Store} from "redux";
import {EntryAction} from "../state/EntryAction";

export interface BiotopeStore {
	lastState: any;
	store: Store;
	id: string;
	triggerOnStateChange?: Function;

	getState(store: Store, id?: string): any;
	dispatch(state: any): EntryAction;
	subscribe(store: Store, id: string, triggerOnStateChange: Function): void;
}
