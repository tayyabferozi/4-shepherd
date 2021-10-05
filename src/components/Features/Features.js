import React from "react";

const Features = () => {
  return (
    <div id="features">
      <h2 className="mb-3 text-center">Nuestras herramientas incluyen</h2>
      <div className="d-flex justify-content-center align-items-center features-main">
        <div className="feauture-img-container">
          <img src="./assets/vectors/features-1.svg" alt="" />
          <h3 className="feature-text">
            Bots for creation of <br /> massive tasks
          </h3>
        </div>
        <div className="feauture-img-container">
          <img src="./assets/images/features-2.png" alt="" />
          <h3 className="feature-text">
            Tracking apps <br /> yields
          </h3>
        </div>
        <div className="feauture-img-container">
          <img src="./assets/vectors/features-3.svg" alt="" />
          <h3 className="feature-text">
            Artificial intelligence <br /> and data analytics
          </h3>
        </div>
      </div>
      <img className="coins" src="./assets/vectors/coins-.svg" alt="coints" />
    </div>
  );
};

export default Features;
