/**
 * Created by jakeforaker on 7/14/16.
 */

import React, {PropTypes} from 'react';
import { Thumbnail, Image } from 'react-bootstrap';
import './styles.scss';

const Tweet = ({text, user}) => {
	return (
		<Thumbnail className="thumb">
			<Image src={user.profile_image_url} circle/>
			<h5>@{user.name}</h5>
			<p>{text}</p>
		</Thumbnail>
	);
};

Tweet.propTypes = {
	text: PropTypes.string,
	user: PropTypes.object
};

export default Tweet;
