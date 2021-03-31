import React from "react";
import {Route} from "react-router-dom"
import ContactData from "../ContactData/ContactData"
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary"


class Checkout extends React.Component {
  state= {
    traits: null,
    price:0
  }


  componentWillMount() {
      const query = new URLSearchParams(this.props.location.search);
      const traits = {};
      let price= 0
      for (let param of query.entries()) {
          // ['salad', '1']
    if(param[0] === "price") {
      price = param[1]
    } else {
      traits[param[0]] = +param[1];

    }
      }
      this.setState({traits: traits, totalPrice: price});
  }

  checkoutCancelled =() => {
    this.props.history.goBack();
  }

  checkoutContinued = () => {
    this.props.history.replace("/checkout/contact-data");
  }

  render(){
    return(
      <>
      <div>
        <CheckoutSummary
        traits={this.state.traits}
        checkoutCancelled={this.checkoutCancelled}
        checkoutContinued={this.checkoutContinued}/>
        <Route
        path={this.props.match.path + '/contact-data'}
        render={ (props) => (<ContactData traits={this.state.traits} price={this.state.totalPrice} {...props} /> )} />
      </div>
      </>
    )
  }
}

export default Checkout;
