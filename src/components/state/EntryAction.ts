import {AnyAction} from 'redux';

export interface EntryAction extends AnyAction {
	payload?: {
		id: string;
		newState: string;
	}
}
