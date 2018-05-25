import {createInitialSimpleComponentState, SimpleComponentState} from "./SimpleComponentState";
import {SIMPLE_COMP_ACTION} from "./SimpleComponent.actions";
import {Reducer} from 'redux';
import {ComponentAction} from '../../state/ComponentAction';

const reducerCreator: (componentId: string) => Reducer = (componentId: string) =>
	(state: SimpleComponentState = createInitialSimpleComponentState(), action: ComponentAction): SimpleComponentState => {
		if (action.id == componentId) {
			switch (action.type) {
				case SIMPLE_COMP_ACTION.SET:
					return {
						...state,
						counter: action.payload.counter
					};
				case SIMPLE_COMP_ACTION.COUNT_UP:
					return {
						...state,
						counter: state.counter + 1
					};
				case SIMPLE_COMP_ACTION.COUNT_DOWN:
					return {
						...state,
						counter: state.counter - 1
					};
				default:
					return state;
			}
		} else {
			return state;
		}
	};

export default reducerCreator;
