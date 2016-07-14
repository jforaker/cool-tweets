import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import StatusResults from './StatusResults.js';

describe('<StatusResults />', () => {

	it('should render an <li> for each status', () => {
		const props = {
			statuses: [{text: 'foo'}, {text: 'bar'}]
		};
		const wrapper = shallow(<StatusResults {...props} />);
		expect(wrapper.find('li')).to.have.length(2);
	});
});
