import React from 'react';
import { Link } from 'react-router';
import { Col, Jumbotron } from 'react-bootstrap';

const HomePage = () => {
	return (
		<Col xs={12} md={12} fluid>
			<Jumbotron>
				<h1>Welcome to Cool-Tweets!</h1>
				<h3><Link to="repo-search">Get started now</Link></h3>
			</Jumbotron>
		</Col>
	);
};

export default HomePage;
