import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

const BuildControls = props => {
  return (
    <div className={classes.BuildControls}>
      <p>
        Current Price: <strong>{props.price.toFixed(2)}</strong>
      </p>
      {controls.map(element => (
        <BuildControl
          key={element.label}
          label={element.label}
          type={element.type}
          add={() => props.addIngredient(element.type)}
          remove={() => props.removeIngredient(element.type)}
          disabled={props.disabled[element.type]}
        ></BuildControl>
      ))}
      <button
        onClick={props.ordered}
        className={classes.OrderButton}
        disabled={!props.purchaseable}
      >
        ORDER NOW
      </button>
    </div>
  );
};

export default BuildControls;
