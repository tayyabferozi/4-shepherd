import React from "react";

const Stats = () => {
  return (
    <div id="stats">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <img
              src="assets/vectors/stats-top.svg"
              className="earn"
              alt="earn"
            />
          </div>
          <div className="col-md-6">
            <div className="text">
              <h3>
                We develop systems <br /> to manage investments in:
              </h3>
              <ul className="list">
                <li>Blockchain-based games (Play to earn)</li> <br />
                <li>Cryptographic Art and Virtual Lands (NFT)</li> <br />
                <li>Decentralized Finance (DeFi)</li> <br />
                <li>New projects tokens of Metaverse</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="stats mx-auto mt-5">
        <img
          className="outline"
          src="./assets/images/box-outline.png"
          alt="outline"
        />
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-3 col-6 py-2 py-sm-0">
              <h2>+1000</h2>
              <p>Active players</p>
            </div>
            <div className="col-sm-3 col-6 py-2 py-sm-0">
              <h2>+35000</h2>
              <p>NFT managed</p>
            </div>
            <div className="col-sm-3 col-6 py-2 py-sm-0">
              <h2>+10</h2>
              <p>
                Invested NFT <br /> projects
              </p>
            </div>
            <div className="col-sm-3 col-6 py-2 py-sm-0">
              <h2>+260</h2>
              <p>Ethereum invested</p>
            </div>
          </div>
        </div>
      </div>

      <div className="companies mx-auto mt-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <img src="./assets/vectors/axie.svg" alt="axie" />
            </div>
            <div className="col">
              <img src="./assets/vectors/sandbox.svg" alt="sandbox" />
            </div>
            <div className="col">
              <img src="./assets/vectors/star-atlas.svg" alt="star-atlas" />
            </div>
            <div className="col">
              <img src="./assets/vectors/derace.svg" alt="derace" />
            </div>
            <div className="col">
              <img src="./assets/vectors/decentraland.svg" alt="decentraland" />
            </div>
            <div className="col">
              <h5>and more...</h5>
            </div>
          </div>
        </div>
      </div>

      <div className="info mt-5">
        <div className="info-text mx-auto">
          <img className="left" src="./assets/images/info-left.png" alt="" />
          <img className="right" src="./assets/images/info-right.png" alt="" />
          <div>
            We have more than 1000 active players from around the world
            generating tokens tradeables on large exchanges and sharing profits.{" "}
            <br />A constantly growing community that generates mutual benefits
            for investors and players.
          </div>
          <div>
            We create administration, control and distribution tools to provide
            better transparency, security with the investments and players.
          </div>
          <div>
            At 4S we constantly investigate and analyze the different
            opportunities that can generate a solid and constant incomes.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
