import {
	CHANGE_QUERY,
	RECEIVE_STATUSES_SUCCESS,
	REQUEST_STATUSES,
	OPEN_MODAL
} from '../constants/actionTypes';

const initialState = {
	isRequesting: false,
	query: 'cnnmoney',
	statuses: [],
	modalIsOpen: false
};

export default function statusSearch(state = initialState, action) {

	switch (action.type) {
		case REQUEST_STATUSES:
			return {
				...state,
				isRequesting: action.isRequesting,
				statuses: action.isRequesting ? [] : state.statuses
			};
		case CHANGE_QUERY:
			return {
				...state,
				query: action.query
			};
		case RECEIVE_STATUSES_SUCCESS:
			return {
				...state,
				statuses: action.statuses
			};
		case OPEN_MODAL:
			return {
				...state,
				modalIsOpen: action.modalIsOpen
			};

		default:
			return state;
	}
}
