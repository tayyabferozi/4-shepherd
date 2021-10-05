import React from "react";

const Landing = () => {
  return (
    <div id="landing">
      <img className="bg" src="./assets/vectors/landing-bg.svg" alt="landing" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5">
            <h1 className=" mb-4 lh-1">
              We manage <br /> thousands of NFT
            </h1>
            <h3>
              We manage investments in cryptoassets that generates passive
              incomes with custom tools for large scales
            </h3>
          </div>
          <div className="col-md-7">
            <img
              className="landing-right"
              src="./assets/vectors/landing-right.svg"
              alt="landing-right"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
