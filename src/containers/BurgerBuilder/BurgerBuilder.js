import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/Layout/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/BuildControls/OrderSummary/OrderSummary";

const INGREDIENTS_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: {
        salad: 0,
        cheese: 0,
        bacon: 0,
        meat: 0
      },
      totalPrice: 0,
      purchaseable: false,
      purchasing: false
    };
  }

  purchaseHandler = () => {
    this.setState({ purchasing: !this.state.purchasing });
  };

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map(key => {
        return ingredients[key];
      })
      .reduce((sum, element) => {
        return sum + element;
      }, 0);
    this.setState({ purchaseable: sum > 0 });
  }

  checkoutHandler = () => {
    const queryParams = [];
    for (let key in this.state.ingredients) {
      queryParams.push(
        encodeURIComponent(key) +
          "=" +
          encodeURIComponent(this.state.ingredients[key])
      );
    }
    queryParams.push("price=" + this.state.totalPrice);
    const queryProperUrl = queryParams.join("&");
    this.props.history.push({
      pathname: "/checkout",
      search: "?" + queryProperUrl
    });
  };

  addIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENTS_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
    this.updatePurchaseState(updatedIngredients);
  };

  removeIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    let updatedCount = oldCount;
    if (oldCount >= 0) {
      updatedCount = oldCount - 1;
    }
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENTS_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceAddition;
    this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
    this.updatePurchaseState(updatedIngredients);
  };

  render() {
    let disableInfo = {
      ...this.state.ingredients
    };
    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] === 0 ? true : false;
    }

    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseHandler}>
          <OrderSummary
            clicked={this.checkoutHandler}
            ingredients={this.state.ingredients}
            purchaseCancelled={this.purchaseHandler}
          ></OrderSummary>
        </Modal>

        <Burger ingredients={this.state.ingredients}></Burger>
        <BuildControls
          addIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
          disabled={disableInfo}
          price={this.state.totalPrice}
          ordered={this.purchaseHandler}
          purchaseable={this.state.purchaseable}
        ></BuildControls>
      </Aux>
    );
  }
}

export default BurgerBuilder;
