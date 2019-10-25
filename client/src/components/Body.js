import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';

function Body() {
    return (
        <Container>
            <Row>
                <Col>
                    <br />
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <h2 className="display-4">Search...</h2>
                            <Form.Control
                                style={{ borderRadius: '0.5em' }}
                                type="text"
                                placeholder="Type here to search..."
                            />
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Body;
