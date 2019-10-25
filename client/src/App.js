import React from 'react';
import { Navbar } from 'react-bootstrap';
function App() {
    return (
        <>
            <Navbar bg="bg-white" variant="light">
                <Navbar.Brand href="#home">
                    <img
                        alt="Logo"
                        src="/logo.png"
                        width="112"
                        height="28"
                        className="d-inline-block align-top"
                    />
                    {' React Bootstrap'}
                </Navbar.Brand>
            </Navbar>
        </>
    );
}

export default App;
