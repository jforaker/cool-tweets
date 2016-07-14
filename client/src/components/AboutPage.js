import React from 'react';
import { Col, Jumbotron} from 'react-bootstrap';

const AboutPage = () => {
	return (
		<Col xs={12} md={12} fluid>
			<Jumbotron>
				<h2 className="alt-header">About</h2>
				<p>Cool-Tweets was initialized with <a href="https://github.com/jforaker/rejakt-react-boilerplate" target="_blank">my fork</a> of <a href="https://github.com/coryhouse/react-slingshot" target="_blank">React-Slingshot</a>,</p>
				<p>an amazing React + Redux boilerplate with Babel, hot reloading, testing, linting all baked in.</p>
			</Jumbotron>
		</Col>
	);
};

export default AboutPage;
