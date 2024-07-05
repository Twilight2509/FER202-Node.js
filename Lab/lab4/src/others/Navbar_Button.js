import React from 'react';
import { Navbar, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navbar_Button = () => {
    return (
        <Container className="text-left" variant="primary" class="bg-primary" data-bs-theme="dark">
            <Button as={Link} to="/"  className="me-2">
            <img src="/public/images/logo.png" style={{ width: '20px', marginRight: '8px' }} />
            Home</Button>
            <Button as={Link} to="/add" className="me-2">Add Employee</Button>
        </Container>
    );
};

export default Navbar_Button;
