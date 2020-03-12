import React from "react";
import Aux from "../../../../hoc/Aux";

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
      <button btnType="Danger" onClick={props.purchaseCancelled}>
        CANCEL
      </button>
      <button btnType="Success">
        CONTINUE
      </button>
    </Aux>
  );
};

export default OrderSummary;
