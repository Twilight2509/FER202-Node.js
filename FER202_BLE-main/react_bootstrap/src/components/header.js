import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

export default function Header() {
  return (
    <Container fluid style={{display:'-ms-grid',backgroundColor:'blue', fontSize:'30px'}}>
        <Row>
            <img 
                src="/image/logo.png" 
                alt="React Logo" 
                style={{ width: '100px', height: '100px' }}
            />
        </Row>
    </Container>
  )
}
