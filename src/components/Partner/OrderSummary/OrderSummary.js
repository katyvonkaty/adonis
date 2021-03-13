import React from "react"

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
      <p> Continue to checkout </p>
    </>
  )

}

export default orderSummary
