import React from "react";
import { Link, NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  padding: "12px",
  margin: "0px 6px 6px",
  background: "white",
  textDecoration: "none",
  color: "black",
};

function Header() {
  return (
    <div className="header">
      <h1>FLATIRON YEARBOOK: CLASS OF 04-25-22</h1>
      <Link style={linkStyles} className="a" to="/">
        Home
      </Link>
      <NavLink style={linkStyles} className="a" to="/studentlist">
        Students
      </NavLink>
      <NavLink style={linkStyles} className="a" to="/shoutouts">
        Shoutouts
      </NavLink>
    </div>
  );
}

export default Header;
