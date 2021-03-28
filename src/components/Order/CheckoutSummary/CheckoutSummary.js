import React from "react"
import Partner from "../../Partner/Partner"
import { Button } from 'semantic-ui-react'
// import Button from "../../UI/Button/Button"


const checkoutSummary = (props) => {
  return (
    <div style={{textAlign:"center"}}>
      <h1> We hope you guys get along </h1>
      <div style={{width:"300px", height:"300px", margin: "auto"}}>
      <Partner traits={props.traits}/>
      </div>
      <Button onClick={props.checkoutCancelled}> Cancel </Button>
      <Button onClick={props.checkoutContinued}> Continue </Button>

    </div>
  )
}


export default checkoutSummary
