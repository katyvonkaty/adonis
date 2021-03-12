import React from "react"
import Aux from "../../hoc/Aux"

const layout = (props) => (
  <Aux>
    <div> Toolbar, side drawer, backdrop </div>
    <main className="main">
    {props.children}
    </main>
  </Aux>
)


export default layout;
