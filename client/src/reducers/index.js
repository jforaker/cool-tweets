import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

//our reducers:
import statusSearch from './statusSearch';

const rootReducer = combineReducers({
	statusSearch,
	routing: routerReducer
});

export default rootReducer;
