import React from "react"
import Aux from "../../hoc/Aux"
import Toolbar from "../Navigation/Toolbar/Toolbar"
import SideDrawer from "../Navigation/SideDrawer/SideDrawer"

const layout = (props) => (
  <Aux>
    <div>  side drawer, backdrop </div>
    <Toolbar />
    <SideDrawer />

    <main className="main content">
    {props.children}
    </main>
  </Aux>
)


export default layout;
