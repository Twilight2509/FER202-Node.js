import React from "react";
import { Table, Form, Button, Col, Row } from "react-bootstrap";
import {useState} from "react";

// Function definitions
function add() {
  const a = parseFloat(document.getElementById("num1").value);
  const b = parseFloat(document.getElementById("num2").value);
  document.getElementById("result").value = a + b;
}

function sub() {
  const a = parseFloat(document.getElementById("num1").value);
  const b = parseFloat(document.getElementById("num2").value);
  document.getElementById("result").value = a - b;
}

function mul() {
  const a = parseFloat(document.getElementById("num1").value);
  const b = parseFloat(document.getElementById("num2").value);
  document.getElementById("result").value = a * b;
}

function div() {
  const a = parseFloat(document.getElementById("num1").value);
  const b = parseFloat(document.getElementById("num2").value);
  document.getElementById("result").value = a / b;
}

// Sample list of operators
let mylist = [
  { a: 2, b: 2, op: "Cong", result: 4 },
  { a: 1, b: 2, op: "Tru", result: 1 },
  { a: 1, b: 2, op: "Nhan", result: 2 },
  { a: 1, b: 2, op: "Chia", result: 0.5 },
];

function Lesson1() {
  return (
    <Row>
      <Col sm={5}>
        <h1 style={{ color: "blue", textAlign: "center" }}>
          Thực hiện phép toán
        </h1>
        <label>
          Nhập a:<input className="form-control" type="number" id="num1" inline></input>         
        </label>
        <div>
          Nhập b:
          <input type="number" id="num2"></input>
        </div>
        <button onClick={add}>a + b</button>
        <button onClick={sub}>a - b</button>
        <button onClick={mul}>a * b</button>
        <button onClick={div}>a / b</button>
        <div style={{ display: "flex", alignItems: "center", color: "blue" }}>
          <h1>Kết quả: </h1>
          <input type="text" id="result"></input>
        </div>
      </Col>
      <Col sm={7}>
        <div>
          List of Operators:
          <table border="1">
            <thead>
              <tr>
                <td>a</td>
                <td>b</td>
                <td>Operator</td>
                <td>Result</td>
              </tr>
            </thead>
            <tbody>
              {mylist.map((i, index) => (
                <tr key={index}>
                  <td>{i.a}</td>
                  <td>{i.b}</td>
                  <td>{i.op}</td>
                  <td>{i.result}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Col>
    </Row>
  );
}

export default Lesson1;
