import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./burger.css";

function Burger() {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/salads">
        Music News
      </a>
      <a className="menu-item" href="/pizzas">
        Discover
      </a>
      {/* <a className="menu-item" href="/desserts">
        Desserts
      </a> */}
    </Menu>
  );
}

export default Burger;
