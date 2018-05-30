import {Reducer, Store} from "redux";
import {ComponentAction} from '../state/ComponentAction';

export interface BiotopeStoreConfiguration {
	store: Store;
	componentId?: string;
	reducerCreator?: (componentId: string) => Reducer;
	triggerOnStateChange?: Function;
}

export interface BiotopeStoreConnector<ComponentState> {
	getState(componentId?: string): ComponentState | any;
	dispatch(action: ComponentAction): void;
	subscribe(componentId: string, triggerOnStateChange: Function): void;

	getComponentId(): string;
}
