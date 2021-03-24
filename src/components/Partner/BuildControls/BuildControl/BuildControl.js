import React from "react";
import { Button } from "semantic-ui-react";

const buildControl = (props) => (
  <div className="buildcontrol">


<h4> {props.label}</h4>
    <Button.Group>
      <Button onClick={props.traitRemoved} disabled={props.disabled}>
        Less
      </Button>
      <Button.Or />
      <Button style={{backgroundColor:"#759B92"}} onClick={props.traitAdded} positive>
        More
      </Button>
    </Button.Group>
    <br />

  </div>
);

export default buildControl;
