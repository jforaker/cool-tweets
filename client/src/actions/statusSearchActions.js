import API_URL from '../utils/api';
const request = require('superagent-bluebird-promise');

import * as types from '../constants/actionTypes';

export function requestStatuses(isRequesting) {
	return dispatch => {
		dispatch({type: types.REQUEST_STATUSES, isRequesting});
		dispatch(toggleModal(true));
	};
}

export function receiveStatusesSuccess(statuses) {
	return dispatch => {
		dispatch({type: types.RECEIVE_STATUSES_SUCCESS, statuses});
		dispatch(requestStatuses(false));
	};
}

export function receiveStatusesError(statuses) {
	return dispatch => {
		dispatch({type: types.RECEIVE_STATUSES_ERROR, statuses});
		dispatch(requestStatuses(false));
	};
}

export function noStatusesFound() {
	return {type: types.NO_STATUSES_FOUND};
}

export function changeQuery(query) {
	return {type: types.CHANGE_QUERY, query};
}

export function toggleModal(force) {
	return (dispatch, getState) => {
		const modalIsOpen = force ? false : !getState().statusSearch.modalIsOpen;
		dispatch({type: types.OPEN_MODAL, modalIsOpen});
	};
}

export function fetchStatuses() {

	return (dispatch, getState) => {
		//short circuit if input is blank
		if (getState().statusSearch.query === '') {
			return;
		}

		const requestURL = `${API_URL}/statuses?q=${getState().statusSearch.query}`;

		dispatch(requestStatuses(true));
		return request.get(requestURL)
			.then(function (response) {
				if (!response.body.statuses.length){
					return dispatch(noStatusesFound());
				}
				dispatch(receiveStatusesSuccess(response.body.statuses));
			}, function (error) {
				console.warn(`error getting ${requestURL}`, error);
				dispatch(receiveStatusesError(error));
			});
	};
}
