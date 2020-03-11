import React from "react";
import classes from "./Burger.module.css";
import Ingredients from "./Ingredients/Ingredients";

const Burger = props => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(IngredientKey => {
      return [...Array(props.ingredients[IngredientKey])].map((_, index) => {
        return <Ingredients key={IngredientKey + index} type={IngredientKey} />;
      });
    })
    // reduce is used here to flattened the array into one single array
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients</p>;
  }

  return (
    <div className={classes.Burger}>
      <Ingredients type="bread-top"></Ingredients>
      {transformedIngredients}
      <Ingredients type="bread-bottom"></Ingredients>
    </div>
  );
};

export default Burger;
