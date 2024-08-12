import React from "react";


//ES6
//Khai bao va khoi tao bien
let a = 5;
let b = 6;
function Cong(a, b) {
  console.log("a + b = " + (a + b));
}

//Goi ham
Cong(a, b);

//Tao 1 list operator
let mylist=[
  {a:1,b:2,op:"Cong",result:3},
  {a:1,b:2,op:"Tru",result:-1},
  {a:1,b:2,op:"Nhan",result:2},
  {a:1,b:2,op:"Chia",result:0.5},
];

function App() {
  return (
    <div className="row">
      <div className="col-5">
        <div>
          <label htmlFor="" style={{ color: "red", fontWeight: "bold" }}>
            Enter a: <input className="form-control" type="text" id="a" />
          </label>
        </div>
        <div>
          <label htmlFor="" style={{ color: "red", fontWeight: "bold" }}>
            Enter b: <input className="form-control" type="text" id="b" />
          </label>
        </div>
        <div>
          <div>
            <label htmlFor="" style={{ color: "red", fontWeight: "bold" }} id="op">
              Operator: 
            </label>
          </div>
          <select className="form-select">
            <option>+</option>
            <option>-</option>
            <option>*</option>
            <option>/</option>
          </select>
        </div>
        <div>
          <label htmlFor="" style={{ color: "red", fontWeight: "bold" }}>
            Result: <input className="form-control" type="text" id="result" />
          </label>
        </div>
        <div>
          <input
          type="button" 
          className="btn btn-outline-success"
          value="Execute"
          />
        </div>

      </div>
      <div className="col-7">
        <div>
            <label htmlFor="" style={{ color: "blue", fontWeight: "bold" }}>
              List of Operator:
            </label>
        </div>
        <table className="table table-primary table-hover">
          <thead>
            <tr>
              <th>a</th>
              <th>b</th>
              <th>Operator</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            {mylist.map(i=>(
              <tr className="table-secondary">
                <td>{i.a}</td>
                <td>{i.b}</td>
                <td>{i.op}</td>
                <td>{i.result}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default App;
