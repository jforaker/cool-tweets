import API_URL from '../utils/api';
const request = require('superagent-bluebird-promise');

import * as types from '../constants/actionTypes';

export function requestStatuses(isRequesting) {
	return {type: types.REQUEST_STATUSES, isRequesting};
}

export function receiveStatusesSuccess(statuses) {
	return dispatch => {
		dispatch({type: types.RECEIVE_STATUSES_SUCCESS, statuses});
		dispatch(requestStatuses(false))
	};
}

export function receiveStatusesError(statuses) {
	return dispatch => {
		dispatch({type: types.RECEIVE_STATUSES_ERROR, statuses});
		dispatch(requestStatuses(false))
	};
}

export function changeQuery(query) {
	return {type: types.CHANGE_QUERY, query};
}

export function fetchStatuses() {

	return (dispatch, getState) => {
		//short circuit if input is blank
		if (getState().statusSearch.query === '') {
			return;
		}

		const requestURL = `${API_URL}/statuses?q=${getState().statusSearch.query}`;
		console.log('requestURL ', requestURL);

		dispatch(requestStatuses(true));
		return request.get(requestURL)
			.then(function (response) {
				console.log('responseresponse', response);
				dispatch(receiveStatusesSuccess(response.body.statuses));
			}, function (error) {
				console.log(`error getting ${requestURL}`, error);
				dispatch(receiveStatusesError(error));
			});
	};
}
