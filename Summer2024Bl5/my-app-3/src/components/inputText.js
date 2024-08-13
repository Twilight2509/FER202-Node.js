import React from 'react'

function inputText(props) {
  return (
    <div>
          <label htmlFor="" style={{ color: "red", fontWeight: "bold" }}>
            {props.message}
          </label>
          <input className="form-control" type="text" onChange={(e) => props.setValue(e.target.value)} value={props.value}/>
    </div>
  )
}

export default inputText