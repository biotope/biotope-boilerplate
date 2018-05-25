import {createInitialBoilerplateState, BoilerplateState} from "./BoilerplateState";
import {Reducer} from 'redux';
import {ComponentAction} from '../../state/ComponentAction';

const reducerCreator: (componentId: string) => Reducer = (componentId: string) =>
	(state: BoilerplateState = createInitialBoilerplateState(), action: ComponentAction): BoilerplateState => {
		if (action.id == componentId) {
			switch (action.type) {
				default:
					return state;
			}
		} else {
			return state;
		}
	};

export default reducerCreator;
