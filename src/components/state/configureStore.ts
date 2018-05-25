import {composeWithDevTools} from 'redux-devtools-extension';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';

const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(thunk))(createStore);
const reducer = combineReducers({});
const configureStore = (initialState = {}) => createStoreWithMiddleware(reducer, initialState);

export default configureStore;
