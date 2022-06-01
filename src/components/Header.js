import React from "react";
import { Link, NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  // width: "50px",
  padding: "6px",
  margin: "0 6px 6px",
  background: "#f72585",
  textDecoration: "none",
  color: "white",
  font: "Century Gothic",
  borderRadius: "10px",
  // border: "2px solid #f72585",
};


function Header() {
  return (
    <div className="header">
      <h1>CLASS OF 042522 YEARBOOK</h1>
      <NavLink 
      to="/" 
      exact 
      style={linkStyles}>
        Home
      </NavLink>
      <NavLink 
      to="/studentlist" 
      style={linkStyles}>
        View Students
      </NavLink>
      <NavLink 
      to="/shoutouts" 
      style={linkStyles}>
        Create a Shoutout
      </NavLink>
    </div>
  );
}

export default Header;
