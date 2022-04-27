import React from "react";
import logo from "../Assets/Pictures/logo.png";

const Navbar = () => {
  return (
    <nav>
      <img className="logo" src={logo} alt="Medical logo" />
      <h1>This is the first header</h1>
    </nav>
  );
};

export default Navbar;
