import React from "react";
import { Button, Radio, Grid } from "semantic-ui-react";

const buildControl = (props) => (
  <div className="buildcontrol">
    <div> {props.label} </div>
    <br />
    <Button.Group>
      <Button onClick={props.traitRemoved} disabled={props.disabled}>
        Less
      </Button>
      <Button.Or />
      <Button color="#eee" onClick={props.traitAdded} positive>
        More
      </Button>
    </Button.Group>
  </div>
);

export default buildControl;
