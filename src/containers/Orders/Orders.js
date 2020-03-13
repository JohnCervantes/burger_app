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
    const fetchData = [];
    instance
      .get("/orders.json")
      .then(res => {
        for (let key in res.data) {
          fetchData.push({ ...res.data[key], key: key });
        }
        this.setState({ orders: fetchData });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        {this.state.orders.map(order => {
          return (
            <Order
              key={order.id}
              price={order.price}
              customer={order.customer}
              ingredients={order.ingredients}
            />
          );
        })}
      </div>
    );
  }
}
