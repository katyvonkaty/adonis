import React from "react"
import Aux from "../../hoc/Aux"
import Toolbar from "../Navigation/Toolbar/Toolbar"

const layout = (props) => (
  <Aux>
    <div>  side drawer, backdrop </div>
    <Toolbar />
    <main className="main content">
    {props.children}
    </main>
  </Aux>
)


export default layout;
