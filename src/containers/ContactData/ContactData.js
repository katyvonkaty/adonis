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
        validation: {
          required:true,
          minLength:5,
          maxLength:5
        },
        valid:false,
        touched: false
      },
      email: {
        elementType: "input",
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
        touched: false

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
          options: [
            { value: "fastest", displayValue:"fastest" },
            { value: "cheapest",displayValue:"cheapest" }
          ],
        },
        value: "",
        touched: false

      },
    },
    formIsValid: false,
    loading: false,
  };

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const formData = {}
    for (let formElementIdentifier in this.state.orderForm){
      formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value
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

  checkValidity(value, rules) {
    let isValid = true

    if(!rules) {
      return true;
    }
    
    if(rules.required) {
      isValid = value.trim !== "" && isValid
    }

    if(rules.minLength ) {
      isValid = value.length >= rules.minLength && isValid
    }

    if(rules.maxLength) {
      isValid = value.length >= rules.maxLength && isValid
    }

    return isValid;
  }

  //trim removes white space

  inputChangedHandler = (event, inputIdentifier) => {

    const updatedOrderForm = {
      ...this.state.orderForm
    }

    const updatedFormElement = {
      ...updatedOrderForm[inputIdentifier]
    }

    updatedFormElement.value = event.target.value
    updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation)
    updatedFormElement.touched = true;
    updatedOrderForm[inputIdentifier] = updatedFormElement

    let formIsValid = true;
    for(let inputIdentifier in updatedOrderForm) {
      formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
    }
    this.setState({orderForm: updatedOrderForm, formIsValid: formIsValid})
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
      <form onSubmit={this.orderHandler} centered>
        {formElements.map( formElement => (
          <InputExample
          key={formElement.id}
          elementType={formElement.config.elementType}
          elementConfig={formElement.config.elementConfig}
          value={formElement.config.value}
          touched ={formElement.config.touched}
          onChange={(event) => this.inputChangedHandler(event, formElement.id)} />
        ))}
        <Button onClick={this.orderHandler} disabled={!this.state.formIsValid}> Checkout </Button>
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
