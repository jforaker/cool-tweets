/**
 * Created by jakeforaker on 7/14/16.
 */

import React, { PropTypes, Component } from 'react';
import { Col, Form, Button, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';

export class SearchForm extends Component {

	constructor(props) {
		super(props);
	}

	render() {

		const { onSubmitForm, onChangeQuery, statusSearch: { query, isRequesting } } = this.props;

		return (
			<Form horizontal onSubmit={onSubmitForm}>
				<FormGroup bsSize="large" controlId="formHorizontalQuery">
					<Col componentClass={ControlLabel} md={3} sm={2}>Search Twitter!</Col>
					<Col sm={10} md={9}>
						<FormControl
							type="text"
							className="input"
							placeholder="something"
							value={query}
							onChange={onChangeQuery}
						/>
					</Col>
				</FormGroup>
				<FormGroup>
					<Col sm={12} lg={12}>
						<Button type="submit" bsStyle="primary" bsSize="large" block active={isRequesting}>
							{isRequesting ? 'Loading...' : 'Get tweets'}
						</Button>
					</Col>
				</FormGroup>
			</Form>
		);
	}
}

SearchForm.propTypes = {
	statusSearch: PropTypes.object.isRequired,
	onChangeQuery: PropTypes.func.isRequired,
	onSubmitForm: PropTypes.func.isRequired
};

export default SearchForm;
