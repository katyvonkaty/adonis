import React from "react";
import PartnerTraits from "./PartnerTraits/PartnerTraits";

const partner = (props) => {
  let transformedTraits = Object.keys(props.traits)
    .map((traitKey) => {
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
        <h1> Lets Make You A Partner! </h1>
        <p>
          {" "}
          2020 starter pack includes mask, sourdough bread, and gender neutral
          indivduals{" "}
        </p>{" "}
      </div>
    );
  }

  console.log(transformedTraits);
  return <div className="wrapper">{transformedTraits}</div>;
};

export default partner;
