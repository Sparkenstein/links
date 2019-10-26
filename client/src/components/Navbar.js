import React from 'react';
import { Container, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <Container fluid>
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="/" className="mr-auto">
                    <img
                        alt="Logo"
                        src="/logo.png"
                        width="112"
                        height="28"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Link to="/submit">
                    <Button variant="outline-primary">Submit</Button>
                </Link>
            </Navbar>
        </Container>
    );
}

export default Navigation;
