import React, { Component } from "react";
import classes from "./ContactData.module.css";
import instance from "../../../axios-orders";
import { withRouter } from "react-router-dom";
import Input from "../../../components//Layout/UI/Input/Input";

class ContactData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderForm: {
        name: {
          value: "",
          elementType: "",
          elementConfig: {
            type: "text",
            placeholder: "Your name"
          },
          validation: {
            required: true
          },
          valid: false,
          touched: false
        },

        email: {
          value: "",
          elementType: "",
          elementConfig: {
            type: "text",
            placeholder: "Your email"
          },
          validation: {
            required: true
          },
          valid: false,
          touched: false
        },

        address: {
          value: "",
          elementType: "",
          elementConfig: {
            type: "text",
            placeholder: "Your address"
          }
        },
        country: {
          value: "",
          elementType: "",
          elementConfig: {
            type: "text",
            placeholder: "Your country"
          },
          validation: {
            required: true
          },
          valid: false,
          touched: false
        },
        deliveryMethod: {
          value: "",
          elementType: "select",
          elementConfig: {
            options: [
              { value: "default", displayValue: "Default" },
              { value: "fastest", displayValue: "Fastest" }
            ],
            placeholder: "Choose delivery method"
          },
          validation: {
            required: true
          },
          valid: false,
          touched: false
        }
      },
      formIsValid: false
    };
  }

  checkValidity(value, rules) {
    if (!rules) {
      return true;
    }

    let isValid = true;

    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.minLength && isValid;
    }

    return isValid;
  }

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedOrderForm = {
      ...this.state.orderForm
    };
    const updatedFormElemenet = {
      ...updatedOrderForm[inputIdentifier]
    };
    updatedFormElemenet.value = event.target.value;
    updatedOrderForm[inputIdentifier] = updatedFormElemenet;
    this.setState({ orderForm: updatedOrderForm });
  };

  orderHandler = event => {
    event.preventDefault();
    const formData = {};
    for (let elementIdentifier in this.state.orderForm) {
      formData[elementIdentifier] = this.state.orderForm[elementIdentifier];
    }
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price.toFixed(2),
      orderData: formData
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
    const formElementsArray = [];
    for (let key in this.state.orderForm) {
      formElementsArray.push({ id: key, config: this.state.orderForm[key] });
    }

    return (
      <div className={classes.ContactData}>
        <h4>Enter your contact data:</h4>

        <form onSubmit={this.orderHandler}>
          {formElementsArray.map(formElement => {
            return (
              <Input
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.value}
                placeholder={formElement.config.elementConfig.placeholder}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                changed={event =>
                  this.inputChangedHandler(event, formElement.id)
                }
              ></Input>
            );
          })}
          <br></br>
          <button type="submit">ORDER</button>
        </form>
      </div>
    );
  }
}

export default withRouter(ContactData);
