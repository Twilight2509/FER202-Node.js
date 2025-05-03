import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

export default function Footer() {
  return (
    <Container fluid style={{ backgroundColor:'blue', fontSize:'30px'}}>
        <Row>
            <Col  xs={12} md={4} style={{justifyItems:'center', justifyContent:'center', backgroundColor:'yellow'}}>Footer</Col>
            <Col md={8}>
                    <Container fluid>
                        <Row>
                            <Col xs={6} sm={3}>Col-1</Col>
                            <Col xs={6} sm={3}>Col-2</Col>
                            <Col xs={6} sm={3}>Col-3</Col>
                            <Col xs={6} sm={3}>Col-4</Col>
                        </Row>
                    </Container>
                </Col>
        </Row>
        
    </Container>
  )
}
