import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Choices from 'choices.js';

function Body() {
    const [tags, setTags] = useState(['Any']);

    useEffect(() => {
        const tagsElement = new Choices('#formTags', {
            choices: [
                { value: 'any', label: 'Any', selected: true },
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

        tagsElement.passedElement.element.addEventListener('addItem', function(
            event
        ) {
            const curr = tagsElement.getValue();
            // Either "Any" or other tags should be in search.
            // i.e. any checks for all tags OR selected tags
            if (curr.find(e => e.value === 'any') && curr.length > 1) {
                tagsElement.removeActiveItemsByValue('any');
            }
            setTags(prevTags => [...prevTags, event.detail.value]);
        });

        tagsElement.passedElement.element.addEventListener(
            'removeItem',
            function(event) {
                setTags(prevTags =>
                    prevTags.filter(curr => curr !== event.detail.value)
                );
            }
        );
    }, []);

    const handleOnChange = e => {
        console.log(tags, '==', e.target.value);
    };
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
                                onChange={handleOnChange}
                                placeholder="Type here to search..."
                            />
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group controlId="formLink">
                        <Form.Label>Link or Description matches:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter words to match against"
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="formLink">
                        <Form.Label>From Category:</Form.Label>
                        <Form.Control as="select" placeholder="Enter Category">
                            {' '}
                            <option>Any</option>
                            <option>Github</option> <option>News</option> 
                            <option>Article</option> <option>Blog</option> 
                            <option>Tool</option> <option>Design</option> 
                            <option>Library</option> 
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="formTags">
                        <Form.Label>Has Tags:</Form.Label>
                        <Form.Control as="select" multiple></Form.Control>
                    </Form.Group>
                </Col>
            </Row>
        </Container>
    );
}

export default Body;
