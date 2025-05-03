import React from 'react';
import {Container, Row, Col, Navbar, Nav, Form} from 'react-bootstrap'


export default function Menu() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
        <Container>
        <Form inline>
          <Row>
            <Col>
            <Form.Control
              type="text"
              placeholder="Search"
              className="mr-sm-5"
            />
            </Col>
          </Row>
        </Form>
        </Container>
      </Navbar>
    </>
  )
}
