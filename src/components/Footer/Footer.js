import React from "react";

const Footer = () => {
  return (
    <div id="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <img
              className="d-block mx-auto mt-3"
              src="./assets/vectors/logo-dark.svg"
              alt="logo"
            />
          </div>
          <div className="col-md-7 address">
            <h4>BUENOS AIRES JUANA MANSO 1650 - CONTACTAR </h4>
            <h4>MIAMI WALL STREET 233 - CONTACTAR </h4>
            <h4>MADRID DE BARBIERI 245 - CONTACTAR </h4>
          </div>
          <div className="col-md-2 row social">
            <div className="col-md-4">
              <img src="./assets/vectors/instagram.svg" alt="instagram" />
            </div>
            <div className="col-md-4">
              <img src="./assets/vectors/telegram.svg" alt="telegram" />
            </div>
            <div className="col-md-4">
              <img src="./assets/vectors/twitter.svg" alt="twitter" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
