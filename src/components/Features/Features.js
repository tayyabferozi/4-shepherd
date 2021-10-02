import React from "react";

const Features = () => {
  return (
    <div id="features">
      <h2 className="mb-3 text-center">Nuestras herramientas incluyen</h2>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <img src="./assets/vectors/features-1.svg" alt="" />
            <h3 className="feature-text">Bots for creation of massive tasks</h3>
          </div>
          <div className="col-md-4">
            <img
              src="./assets/vectors/features-2.svg"
              alt=""
              style={{ maxWidth: "7rem" }}
            />
            <h3 className="feature-text">Tracking apps yields</h3>
          </div>
          <div className="col-md-4">
            <img
              src="./assets/vectors/features-3.svg"
              alt=""
              style={{ maxWidth: "7rem" }}
            />
            <h3 className="feature-text">
              Artificial intelligence and data analytics
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
