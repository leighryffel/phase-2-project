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

const headerImg = (
  <img
    src="https://emoji.slack-edge.com/T02MD9XTF/flatiron_slash/655617af4dbb35c0.png"
    style={{ height: 25 }}
  />
);

function Header() {
  return (
    <div className="header">
      <h1>
        {headerImg} FLATIRON YEARBOOK: CLASS OF 04-25-22 {headerImg}{" "}
      </h1>
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
