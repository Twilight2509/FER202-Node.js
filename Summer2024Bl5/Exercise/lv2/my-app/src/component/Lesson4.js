import React, { useState } from "react";
import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Lesson4() {
  const [result, setResult] = useState("");

  const handleAction = (action) => {
    // Function to handle actions based on user selection
    // Logic for handling 'Nhập mảng', 'In mảng', 'Tổng lẻ', 'Tích chẵn', 'Sắp xếp' goes here.
    setResult(`You selected: ${action}`);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Card style={{ width: "30rem" }}>
        <Card.Header as="h5" className="text-center">
          CÁC THAO TÁC VỚI MẢNG
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group controlId="result">
              <Form.Label>Kết quả</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={result}
                readOnly
              />
            </Form.Group>

            <fieldset className="mt-3">
              <Form.Group>
                <Form.Label>Chọn</Form.Label>
                <div>
                  <Form.Check
                    type="radio"
                    label="Nhập mảng"
                    name="action"
                    onClick={() => handleAction("Nhập mảng")}
                  />
                  <Form.Check
                    type="radio"
                    label="In mảng"
                    name="action"
                    onClick={() => handleAction("In mảng")}
                  />
                  <Form.Check
                    type="radio"
                    label="Tổng lẻ"
                    name="action"
                    onClick={() => handleAction("Tổng lẻ")}
                  />
                  <Form.Check
                    type="radio"
                    label="Tích chẵn"
                    name="action"
                    onClick={() => handleAction("Tích chẵn")}
                  />
                  <Form.Check
                    type="radio"
                    label="Sắp xếp"
                    name="action"
                    onClick={() => handleAction("Sắp xếp")}
                  />
                </div>
              </Form.Group>
            </fieldset>

            <Row className="mt-4">
              <Col className="d-flex justify-content-around">
                <Button variant="primary">Thực hiện</Button>
                <Button variant="secondary">Thoát</Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Lesson4;
