import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { WithContext as ReactTags } from 'react-tag-input';
import "./tags.css";

function SubmitModal({ toShow }) {
    const [show, setShow] = useState(toShow);
    const [clicked, setClicked] = useState(false);
    const handleClose = () => {
        setShow(false);
        setClicked(true);
    };

    const KeyCodes = {
        comma: 188,
        enter: 13,
      };
       
      const delimiters = [KeyCodes.comma, KeyCodes.enter];

    const [tags, setTags] = useState([
        { id: "Thailand", text: "Thailand" },
        { id: "India", text: "India" }
     ]);
     const [suggestions] = useState([
        { id: 'USA', text: 'USA' },
        { id: 'Germany', text: 'Germany' },
        { id: 'Austria', text: 'Austria' },
        { id: 'Costa Rica', text: 'Costa Rica' },
        { id: 'Sri Lanka', text: 'Sri Lanka' },
        { id: 'Thailand', text: 'Thailand' }
     ]);

    const handleDelete = i => {
        setTags(tags.filter((tag, index) => index !== i));
    };

    const handleAddition = tag => {
        setTags([...tags, tag]);
    };

    const handleDrag = (tag, currPos, newPos) => {
        const newTags = tags.slice();

        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);

        setTags(newTags);
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
                                <ReactTags
                                    tags={tags}
                                    suggestions={suggestions}
                                    handleDelete={handleDelete}
                                    handleAddition={handleAddition}
                                    handleDrag={handleDrag}
                                    delimiters={delimiters}
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
                    Submit
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default SubmitModal;
