import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Carousel } from 'react-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <Nav.Link href="#disabled" disabled>Disabled</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-primary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/1920x530"
            alt="Slide"
          />
        </Carousel.Item>
      </Carousel>
    </header>
  );
};

export default Header;