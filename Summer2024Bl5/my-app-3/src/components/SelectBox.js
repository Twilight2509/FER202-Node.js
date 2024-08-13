import React from 'react'
import { Form } from 'react-bootstrap';
function SelectBox(props) {
    return(
        <div>
          <div>
            <label htmlFor="op" style={{ color: "red", fontWeight: "bold" }} id="op">
              Operator: 
            </label>
          </div>
          <Form.Select name="op" id="op" onChange={(e) => props.setOp(e.target.value)} >
            <option value ="0">+</option>
            <option value ="1">-</option>
            <option value ="2">*</option>
            <option value ="3">/</option>
          </Form.Select>
    </div>
    )

}
export default SelectBox