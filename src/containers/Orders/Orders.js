import React, { Component } from "react";
import Order from "../../components/Order/Order";
import instance from "../../axios-orders";

export default class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: []
    };
  }

  componentDidMount() {
    // instance
    //   .get("/orders.json")
    //   .then(res => {
          
    //   })
    //   .catch();
  }

  render() {
    return (
      <div>
        <Order></Order>
      </div>
    );
  }
}
