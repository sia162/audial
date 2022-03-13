import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import "./burger.css";

function Burger({ HandleLogout }) {
  return (
    <Menu>
      <Link className="menu-item" to="/">
        Home
      </Link>
      <Link className="menu-item" to="/musicnews">
        Music News
      </Link>
      <Link className="menu-item" to="/discover">
        Discover
      </Link>

      <button
        style={{ padding: "2px 6px", color: "black" }}
        onClick={HandleLogout}
      >
        Logout
      </button>
    </Menu>
  );
}

export default Burger;
