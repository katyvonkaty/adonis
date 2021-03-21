import React from "react"
import Button from "../../UI/Button/Button"

const orderSummary = (props) => {
  const traitSummary = Object.keys(props.traits)
  .map(traitKey => {
    return <li key={traitKey} style={{textTransform:"capitalize"}}>{traitKey}: {props.traits[traitKey]} </li>
  })

  return(
    <>
      <h3> your order </h3>
      <p> delicious burger </p>
      <ul>
      {traitSummary}
      </ul>
      <p> <strong> Price: {props.price}</strong> </p>
      <p> Continue to checkout </p>
      <Button clicked={props.purchaseCancelled}> Cancel </Button>
      <Button clicked={props.purchaseContinue}> Continue </Button>
    </>
  )

}

export default orderSummary
