import React, { PropTypes } from 'react';
import { Col, Row, ListGroup, ListGroupItem} from 'react-bootstrap';
import Loader from '../Loader/Loader';
import Tweet from '../Tweet/Tweet';
import NoneFound from './NoneFound';
import './styles.scss';

const StatusResults = ({statuses, isRequesting, noneFound}) => {
	let guid = 1;
	return (
		<Col xs={12} md={12} fluid>
			<Row>
				{statuses.length
					?
					<ListGroup>
						{statuses.map(status => <ListGroupItem key={guid++}><Tweet {...status}/></ListGroupItem>)}
					</ListGroup>
					:
					null
				}

				{noneFound && <NoneFound />}

				{isRequesting && <Loader />}
			</Row>
		</Col>
	);
};

StatusResults.propTypes = {
	statuses: PropTypes.array,
	isRequesting: PropTypes.bool,
	noneFound: PropTypes.bool
};

export default StatusResults;
