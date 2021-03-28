import React from "react"
import 'semantic-ui-css/semantic.min.css'
import {Route, Switch} from "react-router-dom"
import Orders from "./containers/Orders/Orders"

import Layout from "./components/Layout/Layout"
import PartnerBuilder from "./containers/PartnerBuilder/PartnerBuilder"
import Checkout from "./containers/Checkout/Checkout"

class App extends React.Component {
  render(){
    return(
      <div>
      <Layout>
        <Switch>
          <Route path="/checkout" component={Checkout} />
          <Route path="/orders" component={Orders} />
          <Route path="/" exact component={PartnerBuilder} />
        </Switch>
      </Layout>
      </div>
    )
  }
}

export default App;
