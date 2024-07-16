import React from 'react';
import { Navbar, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navbar_Button = () => {
    return (
        <Navbar bg="primary" variant="dark">
            <Container className="text-left" variant="primary" class="bg-primary" data-bs-theme="dark">
            <Button as={Link} to="/"  className="me-2">
            <img src="/public/logo.png" style={{ width: '25px', marginRight: '8px' }} />
            Home</Button>
            <Button as={Link} to="/add" className="me-2">Add Employee</Button>
        </Container>
        </Navbar>
    );
};

export default Navbar_Button;
