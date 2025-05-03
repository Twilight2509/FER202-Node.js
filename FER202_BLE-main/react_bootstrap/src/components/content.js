import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Newcontent from './newcontent'
import Detail from './detail'

export default function Content() {
  return (
    <Container fluid>
        <Row >
            <Col md={2} style={{backgroundColor:'red', justifyItems:'center'}}>
                <h1>Left</h1>
            </Col>
            <Col md={8} style={{backgroundColor:'gray', justifyItems:'center'}}>
                <Detail/>
            </Col>
            <Col md={2} style={{backgroundColor:'red', justifyItems:'center'}}>
                <h1>Right</h1>
            </Col>
        </Row>
    </Container>
  )
}
