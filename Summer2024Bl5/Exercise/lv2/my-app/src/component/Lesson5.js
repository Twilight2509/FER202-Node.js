import React, { useState } from "react";
import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Lesson5() {
  const [text, setText] = useState("");
  const [charCount, setCharCount] = useState(0);
  const [position, setPosition] = useState("");
  const [charAtPosition, setCharAtPosition] = useState("");
  const [substring, setSubstring] = useState("");
  const [substringPosition, setSubstringPosition] = useState("");
  const [startPosition, setStartPosition] = useState("");
  const [endPosition, setEndPosition] = useState("");
  const [result, setResult] = useState("");

  const handleTextChange = (e) => {
    const value = e.target.value;
    setText(value);
    setCharCount(value.length);
  };

  const handleFindChar = () => {
    if (position && !isNaN(position)) {
      setCharAtPosition(text.charAt(position - 1));
    }
  };

  const handleFindSubstring = () => {
    if (substring) {
      setSubstringPosition(text.indexOf(substring) + 1);
    }
  };

  const handleSubstringExtraction = () => {
    if (startPosition && endPosition && !isNaN(startPosition) && !isNaN(endPosition)) {
      setResult(text.substring(startPosition - 1, endPosition));
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Card style={{ width: "40rem", borderColor: "pink", borderWidth: 2 }}>
        <Card.Header as="h5" className="text-center">
          ĐỐI TƯỢNG STRING
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group controlId="textInput">
              <Form.Label>Nhập đoạn văn:</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={text}
                onChange={handleTextChange}
              />
            </Form.Group>

            <Form.Group controlId="charCount" className="mt-3">
              <Form.Label>Tổng số ký tự:</Form.Label>
              <Form.Control type="text" value={charCount} readOnly />
            </Form.Group>

            <hr />

            <Row className="mt-3">
              <Col>
                <Form.Group controlId="position">
                  <Form.Label>Nhập vị trí</Form.Label>
                  <Form.Control
                    type="text"
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="charAtPosition">
                  <Form.Label>Ký tự tương ứng</Form.Label>
                  <Form.Control type="text" value={charAtPosition} readOnly />
                </Form.Group>
              </Col>
            </Row>

            <Button variant="primary" onClick={handleFindChar} className="mt-3">
              Find Character
            </Button>

            <hr />

            <Row className="mt-3">
              <Col>
                <Form.Group controlId="substring">
                  <Form.Label>Nhập chuỗi</Form.Label>
                  <Form.Control
                    type="text"
                    value={substring}
                    onChange={(e) => setSubstring(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="substringPosition">
                  <Form.Label>Vị trí tương ứng</Form.Label>
                  <Form.Control type="text" value={substringPosition} readOnly />
                </Form.Group>
              </Col>
            </Row>

            <Button variant="primary" onClick={handleFindSubstring} className="mt-3">
              Find Substring
            </Button>

            <hr />

            <Row className="mt-3">
              <Col>
                <Form.Group controlId="startPosition">
                  <Form.Label>Nhập vị trí cần tách từ</Form.Label>
                  <Form.Control
                    type="text"
                    value={startPosition}
                    onChange={(e) => setStartPosition(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="endPosition">
                  <Form.Label>Đến</Form.Label>
                  <Form.Control
                    type="text"
                    value={endPosition}
                    onChange={(e) => setEndPosition(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="result">
                  <Form.Label>Kết quả</Form.Label>
                  <Form.Control type="text" value={result} readOnly />
                </Form.Group>
              </Col>
            </Row>

            <Button variant="primary" onClick={handleSubstringExtraction} className="mt-3">
              Extract Substring
            </Button>

            <Row className="mt-4">
              <Col className="d-flex justify-content-around">
                <Button variant="secondary" onClick={() => window.location.reload()}>Nhập lại</Button>
                <Button variant="secondary">Thoát</Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Lesson5;
