import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
let middleware = [
	thunk
];
export default function configureStore(initialState) {
	return createStore(rootReducer, initialState, compose(applyMiddleware(...middleware)));
}
