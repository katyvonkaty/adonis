import React from "react";
import PartnerTraits from "./PartnerTraits/PartnerTraits";
import {withRouter} from "react-router";

const partner = (props) => {
  console.log(props.traits);

  let transformedTraits = Object.keys(props.traits)
    .map( traitKey => {

      return [...Array(props.traits[traitKey])].map((_, i) => {
        return <PartnerTraits key={traitKey + i} type={traitKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (transformedTraits.length === 0) {
    transformedTraits = (
      <div style={{ textAlign: "center" }}>
        {" "}
        <p>
          {" "}
          Select from the controls on the right to build!{" "}
        </p>{" "}
      </div>
    );
  }

  console.log(transformedTraits);
  return <div className="wrapper">
  <h1 style={{ textAlign: "center" }}> Lets Make You A Partner! </h1>
  <p style={{ textAlign: "center" }}> 2020 starter pack includes mask, sourdough bread, and gender neutral
  indivduals </p>
      {transformedTraits}
</div>;
};

export default partner;
