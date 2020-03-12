import React from "react";
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import "./index.css";
import { Route, Switch } from "react-router-dom";
import Checkout from "./containers/Checkout/Checkout";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" exact component={BurgerBuilder}></Route>
          <Route path="/checkout" component={Checkout} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
