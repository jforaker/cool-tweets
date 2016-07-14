/**
 * Created by jakeforaker on 7/13/16.
 */

import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import { Nav, NavItem, Navbar } from 'react-bootstrap';


class Header extends Component {

	constructor(props, context) {
		super(props, context);
		this.handleSelect = this.handleSelect.bind(this);
	}

	handleSelect(selectedKey) {
		this.context.router.push(`/${selectedKey}`);
	}

	render () {
		return (
			<Navbar inverse>
				<Navbar.Header>
					<Navbar.Brand>
						<Link to="/">Cool-Tweets</Link>
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav pullRight onSelect={this.handleSelect}>
						<NavItem eventKey={'repo-search'}>Search Tweets</NavItem>
						<NavItem eventKey={'about'} href="#">About</NavItem>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

Header.propTypes = {
	children: PropTypes.element
};

Header.contextTypes = {
	router: PropTypes.object.isRequired
};

export default Header;
