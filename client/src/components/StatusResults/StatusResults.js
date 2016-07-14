import React, { PropTypes } from 'react';
import { Col, Row, ListGroup, ListGroupItem} from 'react-bootstrap';
import Loader from '../Loader/Loader';
import Tweet from '../Tweet/Tweet';
import './styles.scss';

const StatusResults = ({statuses, isRequesting}) => {
	let guid = 1;
	return (
		<Col xs={12} md={12} fluid>
			<Row>
				<ListGroup>
					{statuses.length ? statuses.map(status => <ListGroupItem key={guid++}><Tweet {...status}/></ListGroupItem>) : null}
				</ListGroup>
				{isRequesting && <Loader />}
			</Row>
		</Col>
	);
};

StatusResults.propTypes = {
	statuses: PropTypes.array,
	isRequesting: PropTypes.bool
};

//eslint-disable-next-line import/no-named-as-default
export default StatusResults;
