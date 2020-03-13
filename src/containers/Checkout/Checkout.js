import React, { Component } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";
import { Route } from "react-router-dom";

export default class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: {
        salad: "",
        meat: "",
        bacon: "",
        cheese: ""
      },
      totalPrice: 0
    };
  }

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    for (let param of query.entries()) {
      if (param[0] === "price") {
        this.setState({ totalPrice: +param[1] });
      } else {
        ingredients[param[0]] = +param[1];
      }
    }
    console.log(ingredients);
    this.setState({ ingredients: ingredients });
  }

  checkoutCancelHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinueHandler = () => {
    this.props.history.push("/checkout/contact-data");
  };

  render() {
    return (
      <div>
        <Route
          path="/checkout"
          exact
          render={() => (
            <CheckoutSummary
              checkoutCancel={this.checkoutCancelHandler}
              checkoutContinue={this.checkoutContinueHandler}
              ingredients={this.state.ingredients}
              price={this.state.totalPrice}
            />
          )}
        ></Route>
        <Route
          path={this.props.match.path + "/contact-data"}
          exact
          render={() => (
            <ContactData
              ingredients={this.state.ingredients}
              price={this.state.totalPrice}
            />
          )}
        ></Route>
      </div>
    );
  }
}
