import React from "react";
import "./navbar.css"

function Navbar() {
  return (
  <div className="navbar">
    <div className="navContainer">
        <span className="logo">Booking App</span>
        <div className="navItem">
            <button className="navButton">Register</button>
            <button className="navButton">Login</button>
        </div>
    </div>
  </div>
  );
}

export default Navbar;
