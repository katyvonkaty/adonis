import React from "react"
import Partner from "./Partner"

const checkoutSummary = (props) => {
  return (
    <div>
      <h1> We hope you guys get along </h1>
      <div style={{width:"300px", height:"300px", margin: "auto"}}>
      <Partner traits={props.traits}/>
      </div>
    </div>
  )
}

export default checkoutSummary
