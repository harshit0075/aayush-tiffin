import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="product/">Product</Link>
    </div>
  );
}
export default NavBar;
