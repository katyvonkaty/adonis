import React from "react";
import Backdrop from "../../UI/Backdrop/Backdrop";
import classes from "../../../index.css";

const SideDrawer = (props) => {
  if (props.open) {
    <div className="sidedrawer"> ;</div>
  }

console.log(props);

  return (
    <>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className="sidedrawer">
        <li> Test </li>
        <li> Test </li>
        <li> Test </li>
      </div>
    </>
  );
};

export default SideDrawer;
