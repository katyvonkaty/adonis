import React from "react";
import axios from "axios";
import InputExample from "../../components/UI/Input/Input";
import Spinner from "../../components/UI/Spinner/Spinner";

import { Button } from "semantic-ui-react";

class ContactData extends React.Component {
  state = {
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "your name",
        },
        value: "",
      },
      email: {
        elementType: "textarea",
        elementConfig: {
          type: "text",
          placeholder: "email",
        },
        value: "",
      },
      zipcode: {
        elementType: "textarea",
        elementConfig: {
          type: "text",
          placeholder: "zip",
        },
        value: "",
      },

      state: {
        elementType: "textarea",
        elementConfig: {
          type: "text",
          placeholder: "state",
        },
        value: "",
      },
      deliveryMethod: {
        elementType: "select",
        elementConfig: {
          placeholder: "delivery",

          options: [{ value: "fastest", displayValue:"fastest" }, { value: "cheapest",displayValue:"cheapest" }],
        },
        value: "",
      },
    },
    loading: false,
  };

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const formData = {}
    for (let formElementIdentifier in this.state.orderform){
      formData[formElementIdentifier] = this.state.[formElementIdentifier].value
    }
    const order = {
      traits: this.props.traits,
      price: this.props.totalPrice,
      order: formData
    };
    axios
      .post("/orders.json", order)
      .then((response) => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch((error) => this.setState({ loading: false }));

    console.log(this.props.traits);
  };

  inputChangedHandler = (event, inputIdentifier) => {

    const updatedOrderForm = {
      ...this.state.orderForm
    }

    const updatedFormElement = {
      ...updatedOrderForm[inputIdentifier]
    }

    updatedFormElement.value = event.target.value
    updatedOrderForm[inputIdentifier] = updatedFormElement
    this.setState({orderForm: updatedOrderForm})
    console.log(event.target.value);
  }

  render() {
    const formElements = []
    for(let key in this.state.orderForm) {
      formElements.push({
        id:key,
        config: this.state.orderForm[key]
      })
    }
    let form = (
      <form centered>
        {formElements.map( formElement => (
          <InputExample
          key={formElement.id}
          elementType={formElement.config.elementType}
          elementConfig={formElement.config.elementConfig}
          value={formElement.config.value}
          onChange={(event) => this.inputChangedHandler(event, formElement.id)} />
        ))}
        <Button onClick={this.orderHandler}> Checkout </Button>
      </form>
    );

    if (this.state.loading) {
      form = <Spinner />;
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
