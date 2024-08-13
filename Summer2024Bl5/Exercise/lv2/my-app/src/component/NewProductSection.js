import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';

const NewProductSection = () => {
  const products = [1, 2, 3, 4]; // Placeholder for product data

  return (
    <div className="new-product-section">
      <h2>NEW PRODUCT</h2>
      <p className="text-muted">List product description</p>
      <Row xs={2} md={4} className="g-4">
        {products.map((product, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/280x280" />
              <Card.Body>
                <Card.Title>Product</Card.Title>
                <Card.Text>
                  <span className="text-muted text-decoration-line-through">$0.00</span>
                  <span className="text-danger ms-2">$0.00</span>
                </Card.Text>
                <Button variant="primary" size="sm">
                  <i className="bi bi-cart"></i> Add to cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default NewProductSection;