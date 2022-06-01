import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <h1>CLASS OF 042522 YEARBOOK</h1>
      <Link className="a" to="/">
        Home
      </Link>
      <NavLink className="a" to="/studentlist">
        View Students
      </NavLink>
      <NavLink className="a" to="/shoutouts">
        Create a Shoutout
      </NavLink>
    </div>
  );
}

export default Header;
