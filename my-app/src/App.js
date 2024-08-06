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
  {a:1,b:2,op:"Tru",result:1},
  {a:1,b:2,op:"Nhan",result:2},
  {a:1,b:2,op:"Chia",result:0.5},
];

function App() {
  return (
    <div className="App">
      <div>
        <div>
          Enter a: <input type="text" id="a" />
        </div>
        <div>
          Enter b: <input type="text" id="b" />
        </div>
        <div>
          Operator:
          <select>
            <option>+</option>
            <option>-</option>
            <option>*</option>
            <option>/</option>
          </select>
        </div>
        <div>
          Result: <input type="text" id="result" />
        </div>
        <button>Execute</button>

      </div>
      <div>
        List of Operators;
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
            {mylist.map(i=>(
              <tr>
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
