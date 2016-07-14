// This file merely configures the store for hot reloading.
// This boilerplate file is likely to be the same for each project that uses Redux.
// With Redux, the actual stores are in /reducers.

import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import createLogger from 'redux-logger';
const dev = process.env.NODE_ENV !== 'production';

let middleware = [
	thunk
];

export default function configureStore(initialState) {
	const logger = createLogger();
	if (dev) {
		middleware.push(logger);
	}

	let store = createStore(rootReducer, initialState, compose(
		// Add other middleware on this line...
		applyMiddleware(...middleware), // logger needs to be the last item in applyMiddleware to prevent unnecessary logging of other middlewares
		window.devToolsExtension ? window.devToolsExtension() : f => f //add support for Redux dev tools
		)
	);

	if (module.hot) {
		// Enable Webpack hot module replacement for reducers
		module.hot.accept('../reducers', () => {
			const nextReducer = require('../reducers').default;
			store.replaceReducer(nextReducer);
		});
	}

	return store;
}
