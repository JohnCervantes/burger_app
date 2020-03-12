import React, { Component } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";

export default class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: {
        salad: 1,
        meat: 2,
        bacon: 3,
        cheese: 4
      }
    };
  }
  render() {
    return (
      <div>
        <CheckoutSummary ingredients={this.state.ingredients}></CheckoutSummary>
      </div>
    );
  }
}
