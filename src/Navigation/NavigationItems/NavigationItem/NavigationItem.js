import React from "react";
import classes from "./NavigationItem.module.css";
import { NavLink } from "react-router-dom";

const navigationItem = props => {
  return (
    <li className={classes.NavigationItem}>
      {/* <a href="/" className={props.active ? classes.active : undefined}>
        {props.children}
      </a> */}
      <NavLink
        to={props.link}
        activeClassName={classes.active}
        exact={props.exact}
      >
        {props.children}
      </NavLink>
    </li>
  );
};

export default navigationItem;
