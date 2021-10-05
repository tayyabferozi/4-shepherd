import React, { useRef, useEffect } from "react";

const Navbar = () => {
  const navRef = useRef(null);

  useEffect(() => {
    const menuBtn = navRef.current;
    let menuOpen = false;
    menuBtn.addEventListener("click", () => {
      if (!menuOpen) {
        menuBtn.classList.add("open");
        menuOpen = true;
      } else {
        menuBtn.classList.remove("open");
        menuOpen = false;
      }
    });
  }, [navRef]);

  return (
    <>
      <div id="navbar" className="d-none d-md-flex">
        <img src="./assets/vectors/logo.svg" className="logo" alt="Logo" />
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
            <a href="/">ESPAÑOL</a>
          </li>
        </ul>
      </div>

      <div id="navbar-sm" className="d-md-none">
        <img src="./assets/vectors/logo.svg" className="logo" alt="Logo" />
        {/* <img
          src="./assets/images/hamburger.png"
          className="hamburger"
          alt="hamburger"
        /> */}
        <div class="menu-btn" ref={navRef}>
          <div class="menu-btn__burger"></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
