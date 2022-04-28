import React from "react";
import logo from "../Assets/Pictures/logo.png";
// import { Button } from "@mui/material";

const Navbar = () => {
  return (
    <nav className="container">
      <img className="logo" src={logo} alt="Medical logo" />
      <h1>This is the first header</h1>
      <h2>This is the first header</h2>
      <p>This is the first header</p>
    </nav>
  );
};

export default Navbar;
