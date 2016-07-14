/* eslint-disable */
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai';
import ConnectedApp, { StatusSearch }  from './';

describe('<StatusSearch />', () => {

	it('should render props', () => {
		const props = {
			onSubmitForm: () => {
			},
			onChangeQuery: () => {
			},
			onOpenModal: () => {
			},
			onLoadSuggestion: () => {
			},
			statusSearch: {
				isRequesting: false,
				query: 'cnnmoney',
				statuses: [],
				modalIsOpen: false
			}
		};
		const wrapper = mount(<StatusSearch {...props} />);
		expect(wrapper.props().statusSearch.query).to.equal('cnnmoney');
	});

});
