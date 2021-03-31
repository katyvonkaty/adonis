import React from "react";
import axios from "axios"
import Spinner from '../../components/UI/Spinner/Spinner';

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
    this.setState({ loading: true });
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
      .post("/orders.json", order)
      .then((response) => {
          this.setState({ loading: false});
          this.props.history.push("/")
      })
      .catch((error) => this.setState({ loading: false }));

    console.log(this.props.traits);
  }
  render() {

  let form =   <form>
        <input type="text" name="name" placeholder="name" />
        <input type="text" name="email" placeholder="email" />

        <input type="text" name="address" placeholder="street" />

        <input type="text" name="postCode" placeholder="postcode" />
        <Button onClick={this.orderHandler}> Checkout </Button>
      </form>

      if (this.state.loading) {
        form = <Spinner />
      }
    return (
      <div>
        <h4> Enter your contact data </h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
