import React from "react";
import Aux from "../../hoc/Aux";
import classes from "./Layout.module.css";
import Toolbar from "../../Navigation/Toolbar/Toolbar";
import SideDrawer from "../../Navigation/Sidedrawer/Sidedrawer";

const layout = props => (
  <Aux>
    <Toolbar></Toolbar>
    <SideDrawer></SideDrawer>
    <main className={classes.Content}>{props.children}</main>
  </Aux>
);

export default layout;
