import React from "react";
import classes from "./Order.module.css";

const Order = props => {
  let ingredients = [];
  for (let ingredient in props.ingredients) {
    ingredients.push(
      <span
        style={{
          textTransform: "capitalize",
          marginRight: "10px",
          border: "1px solid #C0C0C0",
          padding: "5px"
        }}
        key={ingredient}
      >
        {ingredient}: ({props.ingredients[ingredient]})
      </span>
    );
  }

  let customer = [];
  for (let info in props.customer) {
    if (info === "address") {
      console.log("hi from address bug");
      console.log({ info });
      // customer.push(
      //   <p>
      //     {info[0]}: {props.customer[info[0]]}
      //   </p>
      // );
      // customer.push(
      //   <p>
      //     {info[1]}: {props.customer[info[1]]}
      //   </p>
      // );
    } else {
      customer.push(
        <p key={info}>
          {info}: {props.customer[info]}
        </p>
      );
    }
  }

  return (
    <div className={classes.Order}>
      <h3>Ingredients: {ingredients}</h3>

      <p>
        Price: <strong>{props.price}</strong>
      </p>
      <h3>Customer Info:</h3>
      {customer}
    </div>
  );
};

export default Order;
