import React, { useState, useRef, useEffect, useContext } from "react";

import { LanguageContext } from "../../context/LanguageContext";

const spanishText = {
  navItem1: "HOME",
  navItem2: "ABOUT US",
  navItem3: "FAQ",
  navItem4: "CONTACT",
  navItem5: "ENGLISH",
};

const engText = {
  navItem1: "HOME",
  navItem2: "NOSOTROS",
  navItem3: "FAQ",
  navItem4: "CONTACTO",
  navItem5: "ESPAÑOL",
};

const Navbar = () => {
  const { isSpanish, toggleIsSpanish } = useContext(LanguageContext);
  const [textState, setTextState] = useState(spanishText);

  const navRef = useRef(null);
  const [navActive, setNavActive] = useState(false);

  const toggleIsSpanishHandler = (e) => {
    e.preventDefault();
    toggleIsSpanish();
  };

  useEffect(() => {
    const menuBtn = navRef.current;
    menuBtn.addEventListener("click", () => {
      setNavActive((prevState) => !prevState);
    });
  }, [navRef]);

  useEffect(() => {
    document.querySelectorAll("#navbar-sm a").forEach((el) => {
      el.addEventListener("click", function () {
        setNavActive(false);
      });
    }, []);
  });

  useEffect(() => {
    setTextState(isSpanish ? spanishText : engText);
  }, [isSpanish]);

  return (
    <>
      <div id="navbar" className="d-none d-md-flex">
        <img src="./assets/vectors/logo.svg" className="logo" alt="Logo" />
        <ul className="nav">
          <li className="nav-item">
            <a href="#landing">{textState.navItem1}</a>
          </li>
          <li className="nav-item">
            <a href="#about-us">{textState.navItem2}</a>
          </li>
          <li className="nav-item">
            <a href="#FAQ">{textState.navItem3}</a>
          </li>
          <li className="nav-item">
            <a href="#footer">{textState.navItem4}</a>
          </li>
          <li className="nav-item">
            <a onClick={toggleIsSpanishHandler} href="/">
              {textState.navItem5}
            </a>
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
          <a href="#landing">{textState.navItem1}</a>
          <a href="#about-us">{textState.navItem2}</a>
          <a href="#FAQ">{textState.navItem3}</a>
          <a href="#footer">{textState.navItem4}</a>
          <a onClick={toggleIsSpanishHandler} href="/">
            {textState.navItem5}
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
