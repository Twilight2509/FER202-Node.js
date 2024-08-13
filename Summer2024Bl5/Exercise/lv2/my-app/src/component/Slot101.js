import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const Slot101 = () => {
  return (
    <Row className="g-4">
      {['primary', 'warning', 'danger'].map((variant, idx) => (
        <Col key={idx}>
          <Card border={variant} className="h-100">
            <Card.Img variant="top" src="../img/image.png" />
            <Card.Body>
              <Card.Text>Some text inside the first card</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Slot101;