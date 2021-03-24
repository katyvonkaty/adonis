import React from "react"
import Aux from "../../hoc/Aux"
import Toolbar from "../Navigation/Toolbar/Toolbar"

class Layout extends React.Component {


  render(){
    return(
      <Aux>
        <Toolbar />

        <main className="main content">
        {this.props.children}
        </main>
      </Aux>
    )
  }
}




export default Layout;
