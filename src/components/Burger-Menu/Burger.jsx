import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import "./burger.css";

function Burger() {
  return (
    <Menu>
      <Link className="menu-item" to="/login">
        Login
      </Link>
      <Link className="menu-item" to="/">
        Home
      </Link>
      <Link className="menu-item" to="/salads">
        Music News
      </Link>
      <Link className="menu-item" to="/pizzas">
        Discover
      </Link>
      {/* <Link className="menu-item" to="/desserts">
        Desserts
      </Link> */}
    </Menu>
  );
}

export default Burger;
