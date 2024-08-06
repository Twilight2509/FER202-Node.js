import React from 'react'

function Lesson1() {
  return (
    <div class="container">
        <h1 style={{color: "blue"}}>Thực hiện phép toán</h1>
        <div>
            Nhập a:
            <input type="number" id="num1"></input>
        </div>
        <div>
            Nhập b:
            <input type="number" id="num2"></input>
        </div>
        <button onclick="add()">a + b</button>
        <button onclick="sub()">a - b</button>
        <button onclick="mul()">a * b</button>
        <button onclick="div()">a / b</button>
        <div>
            <h1>Kết quả : </h1>
            <input type="text" id="result"></input>
        </div>
    </div>
  )
}

export default Lesson1