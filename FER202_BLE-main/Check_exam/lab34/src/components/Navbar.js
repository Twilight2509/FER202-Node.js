import React from 'react'
import { Button, Col, Container, Nav, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
    const navigate = useNavigate();

    const HandleLogout = () =>{
        localStorage.removeItem('account');
        alert('You been logout')
        navigate('/login')
    }

  return (
    <Container>
      <Row >
        <Col style={{justifyItems:'flex-end'}}>
        <Nav>
          <Button style={{alignItems: 'end'}} variant='danger' onClick={HandleLogout}>Logout</Button>
        </Nav>
        </Col>
      </Row>
    </Container>
  )
}
