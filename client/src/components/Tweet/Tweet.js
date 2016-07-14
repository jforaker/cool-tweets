/**
 * Created by jakeforaker on 7/14/16.
 */

import React, {PropTypes} from 'react';
import { Button, Thumbnail} from 'react-bootstrap';

const Tweet = ({text, user}) => {

	console.log('status user..', user);

	return (
		<Thumbnail src="https://react-bootstrap.github.io/assets/thumbnaildiv.png" alt="242x200">
			<h5>@{user.name}</h5>
			<p>{text}</p>
		</Thumbnail>
	);
};

Tweet.propTypes = {
	status: PropTypes.object.isRequired
};

//eslint-disable-next-line import/no-named-as-default
export default Tweet;
