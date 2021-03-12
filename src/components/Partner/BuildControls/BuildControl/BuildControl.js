import React from "react"

const buildControl = (props) => (
  <div className="buildcontrol">
    <div> {props.label} </div>
    <button onClick={props.traitRemoved} disabled={props.disabled}> Less </button>
    <button onClick={props.traitAdded}> More </button>

  </div>
)

export default buildControl
