import React from "react"
import { List } from 'semantic-ui-react'


class OrderSummary extends React.Component {
  componentDidUpdate(){
console.log("order summary will udate");
  }

  render() {
    const traitSummary = Object.keys(this.props.traits)
    .map(traitKey => {
      return(
        <>
      <List>
      <List.Item>
      <List.Icon name='check' />
       <List.Content key={traitKey} style={{textTransform:"capitalize"}}>{traitKey}: {this.props.traits[traitKey]} </List.Content>
      </List.Item>
      </List>
      </>
    )
    })

    return(
      <>
      <h3> Review </h3>
        {traitSummary}
        <p> <strong> Price: {this.props.price}</strong> </p>
        <p> Continue to checkout </p>

      </>
    )
  }


}

export default OrderSummary
