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
  {label:"Financial_Savy", type:"financial_savy"}
]

const buildControls = (props) => (
  <div className="buildcontrols">
  <p> Traits </p>
  <p>Current Price: <strong> {props.price} </strong> </p>
    {controls.map( control => (
       <BuildControl
       traitAdded = {() => props.traitAdded(control.type)}
       traitRemoved={() => props.traitRemoved(control.type)}
       key={control.label} label={control.label}
       disabled={props.disabled[control.type]}
       />
    ))}
    <button className="orderbutton"
    disabled={!props.purchaseable}
    onClick={props.ordered}> Order Now </button>
  </div>
)

export default buildControls
