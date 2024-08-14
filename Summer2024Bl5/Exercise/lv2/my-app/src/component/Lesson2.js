import React from "react";
import { Table, Form, Button, Col, Row } from "react-bootstrap";

function calculate() {
  // Get input values
  let a = parseFloat(document.getElementById("a").value);
  let b = parseFloat(document.getElementById("b").value);
  let c = parseFloat(document.getElementById("c").value);

  // Check if inputs are valid numbers
  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert("Please enter valid numbers");
    return;
  }

  // Determine which operation is selected
  let operation = document.querySelector('input[name="operation"]:checked');

  if (!operation) {
    alert("Please select an operation (Max or Min)");
    return;
  }

  let result = 0;
  if (operation.value === "max") {
    result = Math.max(a, b, c);
  } else {
    result = Math.min(a, b, c);
  }

  // Display the result
  document.getElementById("result").value = result;
}

let mylist = [
  { a: 2, b: 3, c: 4, op: "Max", result: 4 },
  { a: 2, b: 3, c: 4, op: "Min", result: 2 },
];

function Lesson2() {
  return (
    <Row>
      <Col sm={5}>
        <h1 style={{ color: "blue", textAlign: "center" }}>
          TÌM MAX VÀ TÌM MIN
        </h1>
        <div>
          <label htmlFor="a">Nhập a:</label>
          <input
            className="form-control"
            style={{ backgroundColor: "aqua" }}
            type="text"
            id="a"
            name="a"
          ></input>
        </div>
        <div>
          <label htmlFor="b">Nhập b:</label>
          <input
            className="form-control"
            style={{ backgroundColor: "aqua" }}
            type="text"
            id="b"
            name="b"
          ></input>
        </div>
        <div>
          <label htmlFor="c">Nhập c:</label>
          <input
            className="form-control"
            style={{ backgroundColor: "aqua" }}
            type="text"
            id="c"
            name="c"
          ></input>
        </div>
        <div>
          <label htmlFor="result">Kết quả:</label>
          <input
            className="form-control"
            style={{ backgroundColor: "aqua" }}
            type="text"
            id="result"
            readOnly
          ></input>
        </div>
        <div className="choice">
          <input type="radio" id="max" name="operation" value="max"></input>
          <a>TÌm số lớn nhất</a>
          <input type="radio" id="min" name="operation" value="min"></input>
          <a>Tìm số nhỏ nhất</a>
        </div>
        <div className="but">
          <Button type="button" onClick={calculate}>Tim</Button>
          <Button type="reset">Xoa</Button>
        </div>
      </Col>
      <Col sm={7}>
        List of Operators:
        <Table hover>
          <thead>
            <tr>
              <td>a</td>
              <td>b</td>
              <td>c</td>
              <td>Operator</td>
              <td>Result</td>
            </tr>
          </thead>
          <tbody>
            {mylist.map((i, index) => (
              <tr key={index}>
                <td>{i.a}</td>
                <td>{i.b}</td>
                <td>{i.c}</td>
                <td>{i.op}</td>
                <td>{i.result}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
}

export default Lesson2;
