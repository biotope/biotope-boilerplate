import createReducer from './createReducer';
import {Reducer} from 'redux';

export const injectAsyncReducer = (store: any, name: string, asyncReducer: Reducer) => {
	store.asyncReducers = store.asyncReducers || {};
	store.asyncReducers[name] = asyncReducer;
	store.replaceReducer(createReducer(store.asyncReducers));
};
