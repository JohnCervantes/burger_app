import React from "react";
import Burger from "../../Burger/Burger";
import classes from "./CheckoutSummary.module.css";

const CheckoutSummary = props => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>Enjoy your order</h1>
      <div style={{ width: "100%", height: "300px", margin: "auto" }}>
        <Burger ingredients={props.ingredients}></Burger>
        <p>
          <strong>Total Price: {props.price.toFixed(2)}</strong>
        </p>
        <button onClick={props.checkoutCancel}>Cancel</button>
        <button onClick={props.checkoutContinue}>Continue</button>
      </div>
    </div>
  );
};

export default CheckoutSummary;
