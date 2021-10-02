import React from "react";

const Navbar = () => {
  return (
    <div id="navbar">
      <div>
        <img src="./assets/vectors/logo.svg" className="Logo" alt="Logo" />
      </div>
      <div>
        <ul className="nav">
          <li className="nav-item">
            <a href="#landing">HOME</a>
          </li>
          <li className="nav-item">
            <a href="#about-us">ABOUT US</a>
          </li>
          <li className="nav-item">
            <a href="#FAQ">FAQ</a>
          </li>
          <li className="nav-item">
            <a href="#footer">CONTACT</a>
          </li>
          <li className="nav-item">
            <a href="/">ESPANOL</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
