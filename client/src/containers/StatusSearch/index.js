import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { changeQuery, fetchStatuses } from '../../actions/statusSearchActions';
import StatusResults from '../../components/StatusResults/StatusResults';
import { Col, Jumbotron, Form, Button, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import './styles.scss';

export class StatusSearch extends Component {

	constructor(props, context) {
		super(props, context);
	}

	render() {
		return (
			<Col xs={12} md={12} fluid>
				<Jumbotron>
					<Form horizontal onSubmit={this.props.onSubmitForm}>
						<FormGroup bsSize="large" controlId="formHorizontalQuery">
							<Col componentClass={ControlLabel} md={3} sm={2}>Search Twitter!</Col>
							<Col sm={10} md={9}>
								<FormControl
									type="text"
									className="input"
									placeholder="something"
									value={this.props.statusSearch.query}
									onChange={this.props.onChangeQuery}
								/>
							</Col>
						</FormGroup>
						<FormGroup>
							<Col sm={12} lg={12}>
								<Button type="submit" bsStyle="primary" bsSize="large" block>Get tweets</Button>
							</Col>
						</FormGroup>
					</Form>

				</Jumbotron>

				<StatusResults statuses={this.props.statusSearch.statuses}
							   isRequesting={this.props.statusSearch.isRequesting}/>
			</Col>
		);
	}
}

StatusSearch.propTypes = {
	statusSearch: PropTypes.object.isRequired,
	onChangeQuery: PropTypes.func.isRequired,
	onSubmitForm: PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch) {
	return {
		onChangeQuery: (evt) => dispatch(changeQuery(evt.target.value)),
		onSubmitForm: (evt) => {
			if (evt !== undefined && evt.preventDefault) evt.preventDefault();
			dispatch(fetchStatuses());
		},
		dispatch
	};
}

function mapStateToProps(state) {
	return {
		statusSearch: state.statusSearch
	};
}

//eslint-disable-next-line import/no-named-as-default
export default connect(mapStateToProps, mapDispatchToProps)(StatusSearch);
