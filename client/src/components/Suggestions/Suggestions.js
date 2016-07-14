/**
 * Created by jakeforaker on 7/14/16.
 */

import React, { PropTypes } from 'react';
import { Row, Modal, Button} from 'react-bootstrap';

const anchors = ['Jim Acosta', 'Christiane Amanpour', 'Shahira Amin', 'Zain Asher', 'John Avlon'];
const techs = ['javascript', 'node.js', 'react', 'css', 'html5'];
let guid = 1;

const Suggestions = ({toggleModal, modalIsOpen, load}) => {
	return (
			<Row>
				<Button
					bsStyle="link"
					bsSize="large"
					className="suggestions-btn"
					onClick={toggleModal}>
					Need a suggestion?
				</Button>

				<Modal show={modalIsOpen} onHide={toggleModal} className="suggestions-modal">
					<Modal.Header closeButton>
						<Modal.Title>Some suggestions for you...</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<h4>Tech we like:</h4>
						<ul>
							{techs.map(tech => <li key={guid++} onClick={load.bind(null, tech)}>{tech}</li>)}
						</ul>

						<br />

						<h4>Anchors we like:</h4>
						<ul>
							{anchors.map(anchor => <li key={guid++} onClick={load.bind(null, anchor)}>{anchor}</li>)}
						</ul>
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={toggleModal}>Never mind</Button>
					</Modal.Footer>
				</Modal>
			</Row>
	);
};

Suggestions.propTypes = {
	toggleModal: PropTypes.func.isRequired,
	load: PropTypes.func.isRequired,
	modalIsOpen: PropTypes.bool.isRequired
};

//eslint-disable-next-line import/no-named-as-default
export default Suggestions;
