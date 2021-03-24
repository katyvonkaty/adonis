import React from "react"
import BuildControl from "./BuildControl/BuildControl"

const controls = [
  {label: "He/Him", type:"male"},
  {label: "She/Her", type:"female"},
  {label: "They/Them", type:"they"},
  {label: "Humor", type:"humor"},
  {label:"Kindness", type:"kindness"},
  {label:"Cooking", type:"cooking"},
  {label:"Books", type:"books"},
  {label:"Financial Savy", type:"financial_savy"}
]

const BuildControls = (props) => {

return(
  <div className="buildcontrols">
  <h3> Have It Your Way </h3>
  <p>Current Price: <strong> {props.price} </strong> </p>
    {controls.map( control => (
       <BuildControl
       traitAdded = {() => props.traitAdded(control.type)}
       traitRemoved={() => props.traitRemoved(control.type)}
       disabled={props.disabled[control.type]}
       key={control.label} label={control.label}

       />
    ))}


  </div>
)
}

export default BuildControls
