import React from "react";
import Aux from "../../../../hoc/Aux";
import { Link } from "react-router-dom";

const OrderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(key => {
    return (
      <li key={key}>
        {key}: ${props.ingredients[key]}
      </li>
    );
  });

  return (
    <Aux>
      <h3>Your order:</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to checkout?</p>
      <button  onClick={props.purchaseCancelled}>
        CANCEL
      </button>
      <button onClick={props.clicked} btnType="Success">CONTINUE</button>
    </Aux>
  );
};

export default OrderSummary;
