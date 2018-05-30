import {BiotopeStoreConfiguration, BiotopeStoreConnector} from "./BiotopeStoreConnector";
import {generateUniqueId} from './generateUniqueId';
import {injectAsyncReducer} from '../state/injectAsyncReducer';
import {ComponentAction} from '../state/ComponentAction';

export class BiotopeReduxStoreConnector<ComponentState> implements BiotopeStoreConnector<ComponentState> {
	private lastState: ComponentState;
	private config: BiotopeStoreConfiguration;

	constructor(config: BiotopeStoreConfiguration) {
		this.config = config;

		if(!this.config.componentId) {
			this.config.componentId = generateUniqueId();
		}

		injectAsyncReducer(this.config.store, this.config.componentId, this.config.reducerCreator(this.config.componentId));

		this.subscribe(
			this.config.componentId,
			this.config.triggerOnStateChange
		);
	}

	getState(componentId?: string): ComponentState {
		const state = this.config.store.getState();
		return componentId ? state[componentId] : state;
	}

	dispatch(action: ComponentAction): void {
		this.config.store.dispatch(action);
	}

	subscribe(componentId: string, triggerOnStateChange: Function) {
		this.config.store.subscribe(() => {
			const state = this.getState(componentId);

			if (this.config.triggerOnStateChange) {
				this.config.triggerOnStateChange(state, this.lastState);
			}
		});
	}

	getComponentId(): string {
		return this.config.componentId;
	}
}
