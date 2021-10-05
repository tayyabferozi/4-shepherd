import React from "react";

const Art = () => {
  return (
    <div id="art">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-2 pe-4 d-none d-sm-block">
            <img className="art" src="./assets/vectors/art.svg" alt="art" />
          </div>
          <div className="col-sm-10 ps-0 ps-sm-5">
            <h2 className="mb-4">NFT Art</h2>

            <h4 className="desc">
              The NFTs were all the rage at the beginning of the year with
              extraordinary sales amounts and controversial pieces. Many artists
              turned their works into the digital world and joined a new trend
              that still generates controversy due to the high values with which
              they are marketed. Once the novelty passes, only the projects that
              really interest the world's collectors will remain. <br /> We
              offer services to digitize artist pieces and NFT tracking for
              investors.
            </h4>
            <a href="tel:" className="btn outlined ms-sm-2 mx-auto mx-sm-0">
              Contact
            </a>

            <div className="cards-container">
              <div className="card">
                <img src="./assets/vectors/art-1.svg" alt="art-1" />
                <h4>
                  Digitalización
                  <br /> y conversión
                  <br />a NFT de obras.
                </h4>
              </div>
              <div className="card">
                <img src="./assets/vectors/art-2.svg" alt="art-2" />
                <h4>
                  Consultoría <br /> de inversiones <br /> en arte NFT
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Art;
