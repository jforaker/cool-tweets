/**
 * Created by jakeforaker on 7/13/16.
 */

import React from 'react';
import { Row } from 'react-bootstrap';
import './styles.scss';

class Loader extends React.Component {

	render() {
		return (
			<Row>
				<div className="loader">
					<div className="loader-spinner-icon"></div>
				</div>
			</Row>
		);
	}
}

export default Loader;
