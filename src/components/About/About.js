import React from "react";

const About = () => {
  return (
    <div id="about-us">
      <h2 className="text-center my-2">About Us</h2>
      <h4 className="about-text mx-auto text-center">
        We are four brothers who complement our individual and technological
        skills to develop management systems related to cryptocurrencies. Today
        we generate a team that manages more than 1000 people and contributes to
        a cause that is changing the way of seeing the social economic world.
      </h4>

      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <img src="./assets/images/face-1.png" alt="face-1" />
            <div className="person-info-text">
              <h5>Dario Ovejero</h5>
              <h5>Businessman, speaker and NFT artist</h5>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <img src="./assets/images/face-2.png" alt="face-2" />
            <div className="person-info-text">
              <h5>Adrian Ovejero</h5>
              <h5>Lawyer specialized in cryptocurrencies</h5>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <img src="./assets/images/face-3.png" alt="face-3" />
            <div className="person-info-text">
              <h5>Alejandro Ovejero</h5>
              <h5>Analyst and Programmer of the blockchain</h5>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <img src="./assets/images/face-4.png" alt="face-4" />
            <div className="person-info-text">
              <h5>Marcos Ovejero</h5>
              <h5>Audiovisual producer and crypto specialist</h5>
            </div>
          </div>
        </div>
      </div>

      <a className="btn outlined" href="/">
        Know us
      </a>
    </div>
  );
};

export default About;
