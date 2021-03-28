import React from "react";
import {Route} from "react-router-dom"
import ContactData from "../ContactData/ContactData"
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary"
class Checkout extends React.Component {
  state= {
    traits: {
      humor:1,
      female:1,
      kindness:1
    }
  }


      componentDidMount() {
          const query = new URLSearchParams(this.props.location.search);
          const traits = {};
          for (let param of query.entries()) {
              // ['salad', '1']
              traits[param[0]] = +param[1];
          }
          this.setState({traits: traits});
      }
  checkoutCancelled =() => {
    this.props.history.goBack();
  }

  checkoutContinued = () => {
    this.props.history.replace("/checkout/contact-data");

  }

  render(){
    return(
      <div>
        <CheckoutSummary
        traits={this.state.traits}
        checkoutCancelled={this.checkoutCancelled}
        checkoutContinued={this.checkoutContinued} traits={this.state.traits}/>
        <Route render={ () => (<ContactData traits={this.state.traits} /> )} />
      </div>
    )
  }
}

export default Checkout;
