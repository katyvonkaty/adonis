import React from "react";
import axios from "../../axios-orders";
import Partner from "../../components/Partner/Partner";
import BuildControls from "../../components/Partner/BuildControls/BuildControls";
import ModalExampleCloseIcon from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Partner/OrderSummary/OrderSummary";
import { Grid, Container} from "semantic-ui-react";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

const TRAIT_PRICES = {
  male: 0,
  female: 20,
  they: 40,
  books: 10,
  humor: 20,
  kindness: 100,
  financial_savy: 200,
  cooking: 20,
};

class PartnerBuilder extends React.Component {
  state = {
    traits:null,
    totalPrice: 50,
    purchaseable: false,
    purchasing: false,
    loading: false,
    error:false
  };

  componentDidMount() {
    console.log(this.props);
    axios
      .get("https://partner-9b329-default-rtdb.firebaseio.com/traits.json")
      .then( response => {
        this.setState({ traits: response.data });
        console.log(response);
      })
      .catch( error => {
        this.setState({error:true})
      })
  }

  updatePurchaseState(traits) {
    const sum = Object.keys(traits)
      .map((traitKey) => {
        return traits[traitKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ purchaseable: sum > 0 });
  }

  addTraitHandler = (type) => {
    const oldCount = this.state.traits[type];

    const updatedCount = oldCount + 1;
    const updatedTraits = {
      ...this.state.traits,
    };
    updatedTraits[type] = updatedCount;

    const priceAddition = TRAIT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({
      totalPrice: newPrice,
      traits: updatedTraits
        });
    this.updatePurchaseState(updatedTraits);
  };

  removeTraitHandler = (type) => {
    const oldCount = this.state.traits[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedTraits = {
      ...this.state.traits,
    };
    updatedTraits[type] = updatedCount;

    const priceDeduction = TRAIT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({ totalPrice: newPrice, traits: updatedTraits });
    this.updatePurchaseState(updatedTraits);
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {

        const queryParams = [];
        for (let i in this.state.traits) {
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.traits[i]));
        }
        queryParams.push('price=' + this.state.totalPrice.toFixed(2));
        const queryString = queryParams.join('&');
        this.props.history.push({
            pathname: '/checkout',
            search: '?' + queryString
        });
    }



  render() {
    const disabledInfo = {
      ...this.state.traits,
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = null;
    let partner = this.state.error ? <Spinner /> : <Spinner />

    if(this.state.traits) {
      partner =   ( <Grid stackable>
          <Grid.Row>
            <Grid.Column width={11} stackable>
              <Partner traits={this.state.traits || undefined} />
            </Grid.Column>

            <Grid.Column width={4}>
              <BuildControls
                traitAdded={this.addTraitHandler}
                traitRemoved={this.removeTraitHandler}
                disabled={disabledInfo}
                traits={this.state.traits}
                ordered={this.purchaseHandler}
                purchaseable={this.state.purchaseable}
                price={this.state.totalPrice}
              />

              </Grid.Column>
            </Grid.Row>
          </Grid>


            );
              orderSummary =       (<OrderSummary
                price={this.state.totalPrice}
                purchaseContinue={this.purchaseContinueHandler}
                purchaseCancelled={this.purchaseCancelHandler}
                traits={this.state.traits}
              />
            )

    }

    if(this.state.loading) {
      orderSummary = <Spinner />
    }


    return (
      <>
      <Container>

      <ModalExampleCloseIcon
        show={this.state.purchasing}
        purchaseContinue={this.purchaseContinueHandler}
        modalClosed={this.purchaseCancelHandler}
      >
      {orderSummary}
      </ModalExampleCloseIcon>
      {partner}

      </Container>
      </>

    );
  }
}

export default withErrorHandler(PartnerBuilder, axios);
