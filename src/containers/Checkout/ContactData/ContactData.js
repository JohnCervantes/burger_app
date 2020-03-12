import React, { Component } from "react";
import classes from "./ContactData.module.css";

export default class ContactData extends Component {
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
