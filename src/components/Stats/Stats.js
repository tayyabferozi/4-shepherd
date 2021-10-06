import { useContext, useState, useEffect } from "react";

import { LanguageContext } from "../../context/LanguageContext";

const spanishText = {
  top1: "Desarrollamos sistemas",
  top2: "para administrar inversiones en:",
  li1: "Juegos basados en blockchain (Play to earn)",
  li2: "Arte criptográfico y Tierras virtuales (NFT)",
  li3: "Finanzas descentralizadas (DeFi)",
  li4: "Tokens de nuevos proyectos del Metaverse.",
  stat1: "ugadores activos",
  stat2: "NFT administrados",
  stat3_1: "Proyectos NFT",
  stat3_2: "invertidos",
  stat4: "Ethereum invertidos",
  info1_1:
    "Contamos con mas de 1000 jugadores activos de todo el mundo generando tokens comercializables en los grandes exchanges y compartiendo ganancias.",
  info1_2:
    "Una comunidad en constante crecimiento que genera un beneficio mutuo tanto para los inversionistas como para los jugadores.",
  info2:
    "Creamos herramientas de administracion, control y distribucion para brindar mejor transparencia, seguridad y facilidad con las inversiones y los jugadores.",
  info3:
    "En 4S investigamos y analizamos constantemente las distintas oportunidades que puedan generar una renta solida y constante.",
};

const engText = {
  top1: "We develop systems",
  top2: "to manage investments in:",
  li1: "Blockchain-based games (Play to earn)",
  li2: "Cryptographic Art and Virtual Lands (NFT)",
  li3: "Decentralized Finance (DeFi)",
  li4: "New projects tokens of Metaverse",
  stat1: "active players",
  stat2: "NFT managed",
  stat3_1: "Invested NFT",
  stat3_2: "projects",
  stat4: "Ethereum invested",
  info1_1:
    "We have more than 1000 active players from around the world generating tokens tradeables on large exchanges and sharing profits.",
  info1_2:
    "A constantly growing community that generates mutual benefits for investors and players.",
  info2:
    "We create administration, control and distribution tools to provide better transparency, security with the investments and players.",
  info3:
    "At 4S we constantly investigate and analyze the different opportunities that can generate a solid and constant incomes.",
};

const Stats = () => {
  const { isSpanish } = useContext(LanguageContext);
  const [textState, setTextState] = useState(engText);

  useEffect(() => {
    setTextState(isSpanish ? engText : spanishText);
  }, [isSpanish]);

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
                {textState.top1} <br /> {textState.top2}
              </h3>
              <ul className="list">
                <li> {textState.li1}</li> <br />
                <li> {textState.li2}</li> <br />
                <li> {textState.li3}</li> <br />
                <li>{textState.li4}</li>
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
              <p>{textState.stat1}</p>
            </div>
            <div className="col-sm-3 col-6 py-2 py-sm-0">
              <h2>+35000</h2>
              <p>{textState.stat2}</p>
            </div>
            <div className="col-sm-3 col-6 py-2 py-sm-0">
              <h2>+10</h2>
              <p>
                {textState.stat3_1} <br /> {textState.stat3_2}
              </p>
            </div>
            <div className="col-sm-3 col-6 py-2 py-sm-0">
              <h2>+260</h2>
              <p>{textState.stat4}</p>
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
            {textState.info1_1}
            <br />
            {textState.info1_2}
          </div>
          <div>{textState.info2}</div>
          <div>{textState.info3}</div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
