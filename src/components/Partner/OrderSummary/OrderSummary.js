import React from "react"
import Button from "../../UI/Button/Button"

class OrderSummary extends React.Component {
  componentDidUpdate(){
console.log("order summary will udate");
  }

  render() {
    const traitSummary = Object.keys(this.props.traits)
    .map(traitKey => {
      return <li key={traitKey} style={{textTransform:"capitalize"}}>{traitKey}: {this.props.traits[traitKey]} </li>
    })

    return(
      <>
        <h3> your order </h3>
        <p> delicious burger </p>
        <ul>
        {traitSummary}
        </ul>
        <p> <strong> Price: {this.props.price}</strong> </p>
        <p> Continue to checkout </p>
        <Button clicked={this.props.purchaseCancelled}> Cancel </Button>
        <Button clicked={this.props.purchaseContinue}> Continue </Button>
      </>
    )
  }


}

export default OrderSummary
