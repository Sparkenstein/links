import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
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
                <Modal.Title>Submit New Link</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Row>
                        <Col>
                            <Form.Group controlId="formLink">
                                <Form.Label>Link</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter URL"
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formDescription">
                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Description"
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="formTags">
                                <Form.Label>Tags</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Tags"
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formCategory">
                                <Form.Label>Category</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Category"
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default SubmitModal;
