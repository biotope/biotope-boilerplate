import { combineReducers } from 'redux';

export default function createReducer(asyncReducers: any) {
	return combineReducers({
		...asyncReducers
	});
}
