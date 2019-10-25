import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

function SubmitModal({ toShow }) {
    const [show, setShow] = useState(toShow);
    const [clicked, setClicked] = useState(false);
    const handleClose = () => {
        setShow(false);
        setClicked(true);
    };

    return clicked ? (
        <Redirect to="/" />
    ) : (
        <Modal show={show} size="lg" onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Woohoo, you're reading this text in a modal!
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default SubmitModal;
