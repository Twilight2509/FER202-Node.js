import React from "react";
import {Row, Col, Table, Form, Button} from 'react-bootstrap';
import Data from "./Data";
import { useState } from "react"; //1 tinh nang cua HOOK
import InputText from "./components/inputText";
import TableList from "./components/tableList";
import SelectBox from "./components/SelectBox";


function App() {
  //khai bao state
  const [data, setData] = useState(Data);
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [op, setOp] = useState("0");
  const [result, setResult] = useState("");
  
  const Execute=(e)=>{
    let result, operator = "";
    if (op === "0") {
      result = parseInt(a) + parseInt(b);    
      operator = "Cong";  
    }
    if (op === "1") {
      result = parseInt(a) - parseInt(b);
      operator = "Tru";
    }
    if (op === "2") {
      result = parseInt(a) * parseInt(b);
      operator = "Nhan";
    }
    if (op === "3") {
      result = parseInt(a) / parseInt(b);
      operator = "Chia";
    }
    setResult(result);
    setData([...data, { a: a, b: b, op: operator, result: result }]);
  };


  const Execute2 = (e) => {
    //Xac dinh la ucln hay bcnn
    let result= 0, operator= "";
    switch (op) {
      case '4':
        result=UCLN(a, b)
        operator = 'UCLN'
        break;
      case '5':
        result=BCNN(a, b)
        operator = 'BCNN'
        break;
      default:
        return;
    }

    // if(e.target.value === "0") {
    //   result=UCLN(a,b);
    //   operator= "UCLN";
    // }
    // if(e.target.value === "1") {
    //   result=BCNN(a,b);
    //   operator= "BCNN";
    // }
    setResult(result);
    setData([...data, { a: a, b: b, op: operator, result: result }]);
  }
  function UCLN(a,b) {
    while (a !== b) {
      if (a>b) a=a-b;
      else b=b-a;
    }
    return a;
  }
  function BCNN(a,b) {
    return (a*b) /UCLN(a,b);
  }


  const convertOpToNumber = (operator) => {
    switch (operator) {
      case "Cong":
        return "0";
      case "Tru":
        return "1";
      case "Nhan":
        return "2";
      case "Chia":
        return "3";
      case "UCLN":
        return "4";
      case "BCNN":
        return "5";
      default:
        return "0";
    }
  };

  const [selectedItem, setSelectedItem] = useState("");
  const SelectedChange = (item) => {
    console.log(item);
    setA(item.a);
    setB(item.b);
    setOp(convertOpToNumber(item.op)); 
    setResult(item.result);
  }


  return (
    <Row>
      <Col sm={5}>
        <InputText message="Enter a: " value={a} setValue={setA}></InputText>
        <InputText message="Enter b: " value={b} setValue={setB}></InputText>
        <SelectBox ></SelectBox>
        <div>
          <div>
            <label htmlFor="" style={{ color: "red", fontWeight: "bold" }} id="op">
              Operator 2: 
            </label>
          </div>
          <div>
            <Form.Check inline type="radio" label="UCLN" name="op2" onChange={(e)=> setOp(e.target.value)} value={'4'}></Form.Check>
            <Form.Check inline type="radio" label="BCNN" name="op2" onChange={(e)=> setOp(e.target.value)} value={'5'}></Form.Check>
          </div>
        </div>
        <div>
          <label htmlFor="ex" style={{ color: "red", fontWeight: "bold" }}>
            Result: <input value={result} className="form-control" type="text" id="result" readOnly />
          </label>
        </div>
        <div>
          <Button name="ex" variant="outline-success" onClick={Execute} >Execute</Button>
          <Button name="ex" variant="outline-success" onClick={Execute2} >Execute2</Button>
        </div>

      </Col>
      <Col sm={7}>
        <TableList data={data} SelectedChange={SelectedChange}></TableList>
      </Col>

    </Row>
  );
}

export default App;
