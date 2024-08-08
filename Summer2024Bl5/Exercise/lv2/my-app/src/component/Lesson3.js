import React from 'react'

function Lesson3() {
  return (
    <div>
        <h2 style={{color: "blue"}}>THỰC HIỆN PHÉP TOÁN</h2>
        <form id="mathForm" onsubmit="return MathEvent(event)">
            <div class="inputNumberN">
                <label for="num">Nhập n:</label>
                <input type="number" id="num" name="num" min="2" max="99"></input><a>(1 &lt; n &lt; 100)</a>
            </div>
            <div class="input">
                <label for="operation">Chọn phép toán:</label>
                <select id="operation" name="operation" required>
                    <option value="sum">Tổng n số liên tiếp</option>
                    <option value="factorial">Tính n!</option>
                    <option value="odd">In dãy lẻ</option>
                    <option value="even">In dãy số chẵn</option>
                    <option value="primeCheck">Kiểm tra số nguyên tố</option>
                </select>
            </div>
            <div class="button">
                <input type="submit" value="Tính"></input>
            </div>
            <div class="re">
                <label for="result">Kết quả:</label>
                <input type="text" id="result" name="result" readonly></input>
            </div>
        </form>
    </div>
  )
}

export default Lesson3