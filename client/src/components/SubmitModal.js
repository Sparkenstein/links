import React, { useState } from 'react';
import { Button, Form, Row, Col, Container } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import './tags.css';

function SubmitModal() {
    const [clicked, setClicked] = useState(false);
    const [link, setLink] = useState('');
    const [desc, setDesc] = useState('');
    const [category, setCategory] = useState('');

    const handleClose = () => {
        setClicked(true);
    };

    const handleSubmit = async e => {
        e.preventDefault();
        const res = await fetch('/api/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                link,
                desc,
                category
            })
        })
            .then(d => d.json())
            .catch(console.error);
        console.log('DONE', res);
    };

    return clicked ? (
        <Redirect to="/" />
    ) : (
        <Container>
            <Form>
                <Row>
                    <Col>
                        <Form.Group controlId="formLink">
                            <Form.Label>Link</Form.Label>
                            <Form.Control
                                onChange={e => setLink(e.target.value)}
                                type="text"
                                placeholder="Enter URL"
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                onChange={e => setDesc(e.target.value)}
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
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formCategory">
                            <Form.Label>Category</Form.Label>
                            <Form.Control
                                onChange={e => setCategory(e.target.value)}
                                type="text"
                                placeholder="Enter Category"
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ offset: 10, span: 2 }}>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button
                            style={{ marginLeft: '0.5em' }}
                            variant="primary"
                            onClick={handleSubmit}
                        >
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}

export default SubmitModal;
