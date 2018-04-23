import {composeWithDevTools} from 'redux-devtools-extension';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import entries from '../state/core.redux';
import thunk from 'redux-thunk';

const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(thunk))(createStore);
const reducer = combineReducers({entries});
const configureStore = (initialState = {}) => createStoreWithMiddleware(reducer, initialState);

export default configureStore;
