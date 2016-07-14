import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import StatusResults from './StatusResults.js';

describe('<StatusResults />', () => {

	it('should render an <li> for each status', () => {
		const props = {
			statuses: [
				{
					text: 'foo',
					user: {
						name: 'jake'
					}
				},
				{
					text: 'bar',
					user: {
						name: 'carlos'
					}
				}
			]
		};
		const wrapper = mount(<StatusResults {...props} />);
		expect(wrapper.find('li')).to.have.length(2);
	});
});
