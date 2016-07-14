/* eslint-disable */

import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai';
import ConnectedApp, { StatusSearch }  from './';

describe('<StatusSearch />', () => {

	it('should render props', () => {
		const props = {
			onChangeUsername: () => {
			},
			onSubmitForm: () => {
			},
			onChangeQuery: () => {
			},
			statusSearch: {
				query: 'cnnmoney',
				statuses: [{text: 'foo'}]
			}
		};
		const wrapper = mount(<StatusSearch {...props} />);
		expect(wrapper.props().statusSearch.query).to.equal('cnnmoney');
	});

});
