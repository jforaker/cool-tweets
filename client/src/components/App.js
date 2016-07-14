import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import { Grid, Row, ProgressBar } from 'react-bootstrap';
import Header from './Header';
import Loader from './Loader/Loader';

const App = (props) => {

	return (
		<div>
			<Header />
			<Grid>
				<Row>
					{props.children}
				</Row>
			</Grid>
		</div>
	);
};

App.propTypes = {
	children: PropTypes.element
};

export default App;
