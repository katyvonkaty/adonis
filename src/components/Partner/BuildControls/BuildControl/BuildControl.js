import React from "react"
import { Button, Grid } from 'semantic-ui-react'


const buildControl = (props) => (
  <Grid>
  <Grid.Column width={2}>
  <div className="buildcontrol">

    <div> {props.label} </div>
    <br />
    <Button onClick={props.traitRemoved} disabled={props.disabled}> Less </Button> <br />
    <Button onClick={props.traitAdded}> More </Button>

  </div>
    </Grid.Column>
  </Grid>
)

export default buildControl
