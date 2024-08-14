import React from 'react'
import { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';

function Lesson3() {
  return (
    <Row>
      <Col sm={5}>
        <h2 style={{color: "blue"}}>THỰC HIỆN PHÉP TOÁN</h2>
        <form id="mathForm" onsubmit="return MathEvent(event)">
            <div class="inputNumberN">
                <label htmlFor="num">Nhập n:</label>
                <input className='form-control' type="number" id="num" name="num" min="2" max="99"></input><a>(1 &lt; n &lt; 100)</a>
            </div>
            <div class="input">
                <label htmlFor="operation">Chọn phép toán:</label>
                <select id="operation" name="operation" required>
                    <option value="sum">Tổng n số liên tiếp</option>
                    <option value="factorial">Tính n!</option>
                    <option value="odd">In dãy lẻ</option>
                    <option value="even">In dãy số chẵn</option>
                    <option value="primeCheck">Kiểm tra số nguyên tố</option>
                </select>
            </div>
            <Button> Tính </Button>
            <div class="re">
                <label for="result">Kết quả:</label>
                <input className='form-control' type="text" id="result" name="result" readonly></input>
            </div>
        </form>
        </Col>
    </Row>
  )
}

export default Lesson3