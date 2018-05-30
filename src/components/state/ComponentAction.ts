import {AnyAction} from 'redux';

export interface ComponentAction extends AnyAction {
	id: string;
	payload?: any
}
