import React, { useState, useEffect } from 'react';
import { Button, Form, Row, Col, Container } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import Choices from 'choices.js';

function SubmitModal() {
    const [clicked, setClicked] = useState(false);
    const [url, setUrl] = useState('');
    const [description, setDesc] = useState('');
    const [category, setCategory] = useState('');
    const [tags, setTags] = useState([]);

    const handleClose = () => {
        setClicked(true);
    };

    useEffect(() => {
        const tagsElem = new Choices('#formTags', {
            choices: [
                { value: 'github', label: 'Github' },
                { value: 'news', label: 'News' },
                { value: 'article', label: 'Article' },
                { value: 'blog', label: 'Blog' },
                { value: 'tool', label: 'Tool' },
                { value: 'design', label: 'Design' }
            ],
            maxItemCount: 5,
            removeItemButton: true,
            duplicateItemsAllowed: false,
            placeholder: true,
            placeholderValue: 'Enter Tags'
        });

        tagsElem.passedElement.element.addEventListener('addItem', function(
            event
        ) {
            setTags(prevTags => [...prevTags, event.detail.value]);
        });

        tagsElem.passedElement.element.addEventListener('removeItem', function(
            event
        ) {
            setTags(prevTags =>
                prevTags.filter(curr => curr !== event.detail.value)
            );
        });

        const categoryElemt = new Choices('#formCategory', {
            choices: [
                { value: 'github', label: 'Github' },
                { value: 'news', label: 'News' },
                { value: 'article', label: 'Article' },
                { value: 'blog', label: 'Blog' },
                { value: 'tool', label: 'Tool' },
                { value: 'design', label: 'Design' },
                { value: 'library', label: 'Library' }
            ],
            // maxItemCount: 1,
            removeItemButton: true,
            duplicateItemsAllowed: false,
            placeholder: true,
            searchPlaceholderValue: 'Enter Category'
        }).removeActiveItems();

        categoryElemt.passedElement.element.addEventListener(
            'addItem',
            function(e) {
                setCategory(e.detail.value);
            }
        );

        categoryElemt.passedElement.element.addEventListener(
            'removeItem',
            function(e) {
                setCategory('');
            }
        );
    }, []);

    const handleSubmit = async e => {
        e.preventDefault();
        const res = await fetch('/api/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                url,
                description,
                category,
                tags
            })
        })
            .then(res => {
                if (res.status === 200){
                    setClicked(true);
                    return res.json();
                }
            })
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
                                onChange={e => setUrl(e.target.value)}
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
                            <Form.Control as="select" multiple />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formCategory">
                            <Form.Label>Category</Form.Label>
                            <Form.Control as="select" />
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
