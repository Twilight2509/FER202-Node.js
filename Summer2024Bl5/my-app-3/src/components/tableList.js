import React from 'react'
import { Table, Button } from 'react-bootstrap';

function tableList(props) {
  return (
    <div>
            <label htmlFor="" style={{ color: "blue", fontWeight: "bold" }}>
              List of Operator:
            </label>
    
        <Table bordered hover striped variant="">
          <thead>
            <tr>
              <th>a</th>
              <th>b</th>
              <th>Operator</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            {props.data.map(i=>(
              <tr>
                <td>{i.a}</td>
                <td>{i.b}</td>
                <td>{i.op}</td>
                <td>{i.result}</td>
                <td>
                  <Button onClick={() => props.SelectedChange(i)}>Select</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        </div>
  )
}

export default tableList