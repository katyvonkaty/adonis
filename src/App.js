import React from "react"
import 'semantic-ui-css/semantic.min.css'

import Layout from "./components/Layout/Layout"
import PartnerBuilder from "./containers/PartnerBuilder/PartnerBuilder"

class App extends React.Component {
  render(){
    return(
      <div>
      <Layout>
        <PartnerBuilder />
      </Layout>
      </div>
    )
  }
}

export default App;
