import React from "react"
import Partner from "../../components/Partner/Partner"
import BuildControls from "../../components/Partner/BuildControls/BuildControls"
import Modal from "../../components/UI/Modal/Modal"
import OrderSummary from "../../components/Partner/OrderSummary/OrderSummary"

const TRAIT_PRICES = {
  books:10,
  humor:20,
  kindness:100,
  financial_savy:200,
  cooking:20
}

class PartnerBuilder extends React.Component {

  state = {
    traits: {
      partner:1,
      books: 0,
      humor:0,
      kindness: 0,
      financial_savy: 0,
      cooking:0,
    },
    totalPrice: 50,
    purchaseable:false,
    purchasing:false
  }

  updatePurchaseState(traits) {
    const sum = Object.keys(traits)
    .map(traitKey => {
      return traits[traitKey]
    })
    .reduce((sum,el) => {
      return sum + el
    },0)
    this.setState({purchaseable: sum > 0})
  }

  addTraitHandler = (type) => {
    const oldCount = this.state.traits[type];

    const updatedCount = oldCount + 1
    const updatedTraits = {
      ...this.state.traits
    }
    updatedTraits[type] = updatedCount

    const priceAddition= TRAIT_PRICES[type]
    const oldPrice = this.state.totalPrice
    const newPrice = oldPrice + priceAddition
    this.setState({totalPrice: newPrice, traits: updatedTraits, purchaseable:true})
    this.updatePurchaseState(updatedTraits)
  }


  removeTraitHandler = (type) => {
    const oldCount = this.state.traits[type];
    if(oldCount <= 0) {
      return ;
    }
    const updatedCount = oldCount - 1
    const updatedTraits = {
      ...this.state.traits
    }
    updatedTraits[type] = updatedCount

    const priceDeduction = TRAIT_PRICES[type]
    const oldPrice = this.state.totalPrice
    const newPrice = oldPrice - priceDeduction
    this.setState({totalPrice: newPrice, traits: updatedTraits})
    this.updatePurchaseState(updatedTraits)

  }

  purchaseHandler = () => {
    this.setState({purchasing: true})
  }

  render(){

    const disabledInfo = {
      ...this.state.traits
    }

    for( let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }

    return(
      <>
        <Modal show={this.state.purchasing}>
          <OrderSummary traits= {this.state.traits} />
        </Modal >
        <Partner traits={this.state.traits} />
        <BuildControls
        traitAdded={this.addTraitHandler}
        traitRemoved={this.removeTraitHandler}
        disabled= {disabledInfo}
        price={this.state.totalPrice}
        ordered={this.purchaseHandler}
        purchaseable={this.state.purchaseable} />
      </>
    )
  }
}

export default PartnerBuilder
