import {applyMiddleware, combineReducers, createStore, compose} from 'redux';
import thunk from 'redux-thunk';

const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;
const reducer = combineReducers({});
const configureStore = (initialState = {}) => createStore(reducer, initialState, composeEnhancers(
	applyMiddleware(thunk)
));

export default configureStore;
