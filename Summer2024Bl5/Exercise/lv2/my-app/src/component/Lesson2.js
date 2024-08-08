import React from 'react'

function calculate() {
    // Get input values
    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);
    let c = parseFloat(document.getElementById('c').value);
    
    // Check if inputs are valid numbers
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert('Please enter valid numbers');
        return;
    }
    
    // Determine which operation is selected
    let operation = document.querySelector('input[name="operation"]:checked');
    
    if (!operation) {
        alert('Please select an operation (Max or Min)');
        return;
    }
    
    let result;
    if (operation.value === 'max') {
        result = Math.max(a, b, c);
    } else {
        result = Math.min(a, b, c);
    }
    
    // Display the result
    document.getElementById('result').value = result;
}


let mylist = [
    { a: 2, b: 3, c:4, op: "Max", result: 4 },
    { a: 2, b: 3, c:4, op: "Min", result: 2 },
  ];


function Lesson2() {
  return (
    <div class="container">
        <div>
            <h1 style={{color: "blue", textAlign: "center"}}>TÌM MAX VÀ TÌM MIN</h1>
            
            <div>
                <label for="a">Nhập a:</label>
                <input style={{backgroundColor: "aqua"}} type="text" id="a" name="a"></input>
            </div>
            <div>
                <label for="b">Nhập b:</label>
                <input style={{backgroundColor: "aqua"}}  type="text" id="b" name="b"></input>
            </div>
            <div>
                <label for="c">Nhập c:</label>
                <input style={{backgroundColor: "aqua"}}  type="text" id="c" name="c"></input>
            </div>
            <div>
                <label for="result">Kết quả:</label>
                <input style={{backgroundColor: "aqua"}}  type="text" id="result" name="result" readonly></input>
            </div>
            <div class="choice">
                <input type="radio" id="max" name="operation" value="max"></input>
            <a>TÌm số lớn nhất</a>
            <input type="radio" id="min" name="operation" value="min"></input>
            <a>Tìm số nhỏ nhất</a>
            </div>
            <div class="but">
                <button type="button" onclick="calculate()">Tim</button>
            <button type="reset">Xoa</button>
            </div>
        </div>
        <div>
        List of Operators:
        <table border="1">
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
        </table>
      </div>
        
    </div>
  )
}

export default Lesson2