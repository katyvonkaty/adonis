import React from "react"
import logo from './logo.svg';
import './App.css';
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
