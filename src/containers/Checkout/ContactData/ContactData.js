import React, { Component } from "react";
import classes from "./ContactData.module.css";
import instance from "../../../axios-orders";
import { withRouter } from "react-router-dom";

class ContactData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      address: {
        street: "",
        postalCode: ""
      }
    };
  }

  orderHandler = event => {
    event.preventDefault();
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price.toFixed(2),
      customer: {
        name: "john",
        email: "test@test.com",
        deliveryMethod: "slow af",
        address: {
          street: "street",
          zip: "zip",
          country: "germany"
        }
      }
    };
    instance
      .post("/orders.json", order)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
    this.props.history.replace("/");
  };

  render() {
    return (
      <div className={classes.ContactData}>
        <h4>Enter your contact data:</h4>
        <form>
          <input
            className={classes.Input}
            type="text"
            name="name"
            placeholder="enter name here"
          ></input>
          <input
            className={classes.Input}
            type="email"
            name="email"
            placeholder="enter email here"
          ></input>
          <input
            className={classes.Input}
            type="text"
            name="street"
            placeholder="enter street here"
          ></input>
          <input
            className={classes.Input}
            type="text"
            name="postal"
            placeholder="enter postal here"
          ></input>
          <br></br>
          <button onClick={this.orderHandler} type="submit">
            ORDER
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(ContactData);
