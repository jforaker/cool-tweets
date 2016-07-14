/* eslint-disable import/no-named-as-default */
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { changeQuery, fetchStatuses, toggleModal } from '../../actions/statusSearchActions';
import StatusResults from '../../components/StatusResults/StatusResults';
import SearchForm from './SearchForm';
import Suggestions from '../../components/Suggestions/Suggestions';
import { Col, Jumbotron } from 'react-bootstrap';
import './styles.scss';

export class StatusSearch extends Component {

	render() {

		const {
			statusSearch: {statuses, isRequesting, modalIsOpen},
			onOpenModal,
			onLoadSuggestion
			} = this.props;

		return (
			<Col xs={12} md={12} fluid>
				<Jumbotron>
					<SearchForm {...this.props} />
					<Suggestions toggleModal={onOpenModal} modalIsOpen={modalIsOpen} load={onLoadSuggestion}/>
				</Jumbotron>
				<StatusResults statuses={statuses} isRequesting={isRequesting}/>
			</Col>
		);
	}
}

StatusSearch.propTypes = {
	statusSearch: PropTypes.object.isRequired,
	onChangeQuery: PropTypes.func.isRequired,
	onSubmitForm: PropTypes.func.isRequired,
	onLoadSuggestion: PropTypes.func.isRequired,
	onOpenModal: PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch) {
	return {
		onChangeQuery: (evt) => dispatch(changeQuery(evt.target.value)),
		onSubmitForm: (evt) => {
			if (evt !== undefined && evt.preventDefault) evt.preventDefault();
			dispatch(fetchStatuses());
		},
		onOpenModal: () => dispatch(toggleModal()),
		onLoadSuggestion: (query) => {
			dispatch(changeQuery(query));
			dispatch(fetchStatuses(query));
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
