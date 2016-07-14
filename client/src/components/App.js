import React, { PropTypes } from 'react';
import { Grid, Row } from 'react-bootstrap';
import Header from './Header';

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
