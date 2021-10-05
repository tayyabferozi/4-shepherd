import React, { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const navRef = useRef(null);
  const [navActive, setNavActive] = useState(false);

  useEffect(() => {
    const menuBtn = navRef.current;
    let menuOpen = false;
    menuBtn.addEventListener("click", () => {
      setNavActive((prevState) => !prevState);
      // if (!menuOpen) {
      // menuBtn.classList.add("open");
      // menuOpen = true;

      // } else {
      // menuBtn.classList
      // .remove("open");
      // menuOpen = false;
      // }
    });
  }, [navRef]);

  useEffect(() => {
    document.querySelectorAll("#navbar-sm a").forEach((el) => {
      el.addEventListener("click", function () {
        setNavActive(false);
      });
    }, []);
  });

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
        <div className={`menu-btn${navActive ? " open" : " "}`} ref={navRef}>
          <div
            className={`menu-btn__burger${navActive ? " active" : " "}`}
          ></div>
        </div>

        <div className={`sidenav${navActive ? " active" : " "}`}>
          <a href="#landing">HOME</a>
          <a href="#about-us">ABOUT US</a>
          <a href="#FAQ">FAQ</a>
          <a href="#footer">CONTACT</a>
          <a href="#">ESPANOL</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
