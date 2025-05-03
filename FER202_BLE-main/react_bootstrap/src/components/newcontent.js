import React from 'react'
import {Container, Row, Col, Card } from 'react-bootstrap'

export default function Newcontent() {
    const cardContent = [
        { title: 'Card Title 1', text: 'Card text 1' },
        { title: 'Card Title 2', text: 'Card text 2' },
        { title: 'Card Title 3', text: 'Card text 3' },
        { title: 'Card Title 4', text: 'Card text 4' },
    ]

  return (
    <Container>
               <Row>
                    {cardContent.map((content, index) =>(
                        <Col md={3} sm={6} className="mb-4">
                            <Card>
                                <Card.Body key={index}>
                                <Card.Title>{content.title}</Card.Title>
                                <Card.Text>{content.text}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
               </Row>
               <Row>
               {cardContent.map((content, index) =>(
                        <Col md={3} sm={6} className="mb-4">
                            <Card>
                                <Card.Body key={index}>
                                <Card.Title>{content.title}</Card.Title>
                                <Card.Text>{content.text}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
               </Row>
    </Container>
  )
}
