import React from "react";

const Play = () => {
  return (
    <div id="play">
      <img className="bg" src="./assets/vectors/play-bg.svg" alt="bg" />
      <div className="container-fluid main">
        <div className="row">
          <div className="col-md-6">
            <h3 className="mb-3">What is Play to Earn?</h3>
            <h4>
              The gaming industry is going through a massive growth phase, and
              the 'play to win' model opens up new opportunities for blockchain
              gaming.
              <br /> &nbsp;&nbsp;&nbsp; "Play to earn" is simply to give players
              and gaming enthusiasts control and ownership of game assets,
              further allowing these players to increase the value of these
              assets by actively playing the game. Players of this business
              model create value for game developers and other players by
              participating in the game economy. As a reward for their
              participation, they receive game assets. These assets range from
              game resources like game tools, weapons, or cryptocurrencies, to
              other game assets that can be tokenized on the blockchain and even
              sold as NFTs. This is why the "play-to-earn" business model has
              been successful when used with blockchain games.
              <img
                src="./assets/images/play-earn-right.png"
                className="right"
                alt="right"
              />
              <img
                src="./assets/images/play-earn-left.png"
                className="left"
                alt="left"
              />
            </h4>
          </div>
          <div className="col-md-6">
            <div className="stats">
              <h2 className="stats-heading">
                <img
                  className="graph"
                  src="./assets/vectors/graph.svg"
                  alt="graph"
                />
                Incomes from the season (Play to earn){" "}
              </h2>

              <table className="mt-2">
                <tr>
                  <th colSpan="2">Investor returns</th>
                </tr>
                <tr>
                  <td>
                    <h3>40%</h3>
                    <h5>of what is generated</h5>
                  </td>
                  <td>
                    <h3>
                      +5% monthly
                      <br /> rent
                    </h3>
                    <h5>estimated</h5>
                  </td>
                </tr>
              </table>
              <table className="mt-2">
                <tr>
                  <th colSpan="2">Player returns</th>
                </tr>
                <tr>
                  <td style={{ width: "152px" }}>
                    <h3>50%</h3>
                    <h5>of what is generated</h5>
                  </td>
                  <td>
                    <h3>usd 240.000</h3>
                    <h5>monthly distributed</h5>
                  </td>
                </tr>
              </table>

              <div class="companies">
                <h3>See more:</h3>
                <img
                  src="./assets/vectors/cointelegraph.svg"
                  alt="cointelegraph"
                />
                <img
                  className="w-50"
                  src="./assets/vectors/forbes.svg"
                  alt="forbes"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="nft-art">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-2 pe-4 d-none d-sm-block">
              <img className="art" src="./assets/vectors/art.svg" alt="art" />
            </div>
            <div className="col-sm-10 ps-0 ps-sm-5">
              <h2 className="mb-4">NFT Art</h2>

              <h4 className="desc">
                The NFTs were all the rage at the beginning of the year with
                extraordinary sales amounts and controversial pieces. Many
                artists turned their works into the digital world and joined a
                new trend that still generates controversy due to the high
                values with which they are marketed. Once the novelty passes,
                only the projects that really interest the world's collectors
                will remain. <br /> We offer services to digitize artist pieces
                and NFT tracking for investors.
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
    </div>
  );
};

export default Play;
