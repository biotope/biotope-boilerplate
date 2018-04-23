import {ActionCreator, Reducer} from 'redux';
import {EntryAction} from './EntryAction';
import {ApiFetch} from "../core/apiFetch";

const SET = 'biotope/entry/SET';

const reducer: Reducer<{}> = (state: any = {}, action: EntryAction = {type: ''}) => {
	switch (action.type) {
		case SET:
			return {
				...state,
				[action.payload.id]: action.payload.newState
			};
		default:
			return state;
	}
};

export const setEntryState: ActionCreator<EntryAction> = (id: string, newState: any) => ({
	type: SET,
	payload: {
		id,
		newState
	}
});

export const updateEntryState = (apiFetch: ApiFetch, id: string) => {
	return (dispatch: any, getState: any) => {
		apiFetch({id})
			.then((response) => response[0])
			.then((entry) => {
				dispatch(setEntryState(id, entry));
			});
	};
};


export default reducer;
