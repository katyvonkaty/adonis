import React from "react";
import axios from "axios"
import { Button } from "semantic-ui-react";

class ContactData extends React.Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postCode: "",
    },
    loading:false
  };

  orderHandler = (event) => {
    event.preventDefault()
    this.setState({ loading: "true" });
    const order = {
      traits: this.props.traits,
      price: this.props.totalPrice,
      customer: {
        name: "Katie J",
        address: {
          street: "Hilda St",
          zipCode: "11020",
        },
        email: "test@test.com",
      },
      delivery: "fastest",
    };
    axios
      .post("https://partner-9b329-default-rtdb.firebaseio.com/orders.json", order)
      .then((response) => this.setState({ loading: false, purchasing: false }))
      .catch((error) => this.setState({ loading: false, purchasing: false }));

    console.log(this.props.traits);
  }
  render() {
    return (
      <div>
        <h4> Enter your contact data </h4>
        <form>
          <inut type="text" name="name" placeholder="name" />
          <inut type="text" name="email" placeholder="email" />

          <inut type="text" name="address" placeholder="street" />

          <inut type="text" name="postCode" placeholder="postcode" />
          <Button onClick={this.orderHandler}> Checkout </Button>
        </form>
      </div>
    );
  }
}

export default ContactData;
