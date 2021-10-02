import React from "react";

const Play = () => {
  return (
    <div id="play">
      <img className="bg" src="./assets/vectors/play-bg.svg" alt="bg" />
      <div className="container-fluid main">
        <div className="row">
          <div className="col-md-5">
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
          <div className="col-md-7">
            <div className="stats">
              <h2 className="stats-heading">
                <img
                  className="graph"
                  src="./assets/vectors/graph.svg"
                  alt="graph"
                />
                Incomes from the season (Play to earn){" "}
              </h2>

              <table>
                <tr>
                  <th colSpan="2">Investor returns</th>
                </tr>
                <tr>
                  <td>
                    <h3>40%</h3>
                    <h5>of what is generated</h5>
                  </td>
                  <td>
                    <h3>+5% monthly rent</h3>
                    <h5>estimated</h5>
                  </td>
                </tr>
              </table>
              <table className="mt-2">
                <tr>
                  <th colSpan="2">Player returns</th>
                </tr>
                <tr>
                  <td>
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
    </div>
  );
};

export default Play;
