import React from "react";

const Footer = () => {
  return (
    <>
      <div id="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2 logo-container">
              <img
                className="d-block ms-auto mt-3 mb-3 mb-md-0"
                src="./assets/vectors/logo-dark.svg"
                alt="logo"
              />
            </div>
            <div className="col-md-7 address text-center">
              <h4>
                <span className="text-bold">BUENOS AIRES</span> JUANA MANSO 1650
                - CONTACTAR
              </h4>
              <h4>
                <span className="text-bold">MIAMI</span> WALL STREET 233 -
                CONTACTAR
              </h4>
              <h4>
                <span className="text-bold">MADRID</span> DE BARBIERI 245 -
                CONTACTAR
              </h4>
            </div>
            <div className="col-md-3 social d-flex justify-content-md-start justify-content-center align-items-center my-3 my-md-0">
              <div>
                <img src="./assets/vectors/instagram.svg" alt="instagram" />
              </div>
              <div>
                <img src="./assets/vectors/telegram.svg" alt="telegram" />
              </div>
              <div>
                <img src="./assets/vectors/twitter.svg" alt="twitter" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="purple-line"></div>
    </>
  );
};

export default Footer;
