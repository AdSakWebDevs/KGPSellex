import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import logo from "./img/trp-logo.png";

function Navbar() {
  return (
    <nav class="navbar bg-body-tertiary">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1 title">
          <img src={logo} alt="KGPSellex" className="logo" />
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
