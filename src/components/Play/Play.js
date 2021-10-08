import React, { useState, useEffect, useContext } from "react";
import Fade from "react-reveal/Fade";

import { LanguageContext } from "../../context/LanguageContext";

const spanishText = {
  mainHeading: "Que es Play to Earn?",
  para1:
    'La industria del juego está pasando por una fase de crecimiento masivo, y el modelo de "jugar para ganar" abre nuevas oportunidades para el juego con blockchain.',
  para2:
    '“Play to earn” es simplemente dar a los jugadores y a los entusiastas de los juegos el control y la propiedad de los activos del juego, permitiendo además a estos jugadores aumentar el valor de estos activos jugando activamente al juego. Los jugadores de este modelo de negocio crean valor para los desarrolladores del juego y otros jugadores al participar en la economía del juego. Como recompensa por su participación, reciben activos del juego. Estos activos van desde recursos del juego como herramientas de juego, armas o criptomonedas, hasta otros activos del juego que pueden ser tokenizados en la blockchain e incluso vendidos como NFT. Por ello, el modelo de negocio "play-to-earn" ha tenido éxito cuando se ha utilizado con juegos de blockchain.',
  tablesHead_1: "Rentas de",
  tablesHead_2: "la temporada",
  tablesHead_3: "(play to earn)",
  table1Head: "Rendimientos a inversores",
  table1Col1_1: "40%",
  table1Col1_2: "de lo generado",
  table1Col2_1: "+5% renta",
  table1Col2_2: "mensual",
  table1Col2_3: "estimada",
  table2Head: "Rendimientos a jugadores",
  table2Col1_1: "50%",
  table2Col1_2: "de lo generado",
  table2Col2_1: "usd 240.000",
  table2Col2_2: "mensuales distribuidos",
  company1: "Leer más en:",
};

const engText = {
  mainHeading: "What is Play to Earn?",
  para1:
    "The gaming industry is going through a massive growth phase, and the 'play to win' model opens up new opportunities for blockchain gaming.",
  para2:
    '"Play to earn" is simply to give players and gaming enthusiasts control and ownership of game assets, further allowing these players to increase the value of these assets by actively playing the game. Players of this business model create value for game developers and other players by participating in the game economy. As a reward for their participation, they receive game assets. These assets range from game resources like game tools, weapons, or cryptocurrencies, to other game assets that can be tokenized on the blockchain and even sold as NFTs. This is why the "play-to-earn" business model has been successful when used with blockchain games.',
  tablesHead_1: "Incomes from",
  tablesHead_2: "the season",
  tablesHead_3: "(Play to earn)",
  table1Head: "Investor returns",
  table1Col1_1: "40%",
  table1Col1_2: "of what is generated",
  table1Col2_1: "+5% monthly",
  table1Col2_2: "rent",
  table1Col2_3: "estimated",
  table2Head: "Player returns",
  table2Col1_1: "50%",
  table2Col1_2: "of what is generated",
  table2Col2_1: "usd 240.000",
  table2Col2_2: "monthly distributed",
  company1: "See more:",
};

const Play = () => {
  const { isSpanish } = useContext(LanguageContext);
  const [textState, setTextState] = useState(engText);

  useEffect(() => {
    setTextState(isSpanish ? engText : spanishText);
  }, [isSpanish]);

  return (
    <div id="play">
      {/* <img className="bg" src="./assets/vectors/play-bg.svg" alt="bg" /> */}
      <img
        className="bg"
        src="./assets/vectors/play-clipped-bg-with-play.svg"
        alt="bg"
      />
      <div className="container-fluid main">
        <div className="row">
          <div className="col-lg-6 order-lg-1 order-2">
            <h3 className="mb-3">{textState.mainHeading}</h3>
            <div>
              <Fade>
                <h4>
                  {textState.para1}
                  <br /> &nbsp;&nbsp;&nbsp; {textState.para2}
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
              </Fade>
            </div>
          </div>
          <div className="col-lg-6 order-lg-2 order-1">
            {/* <RubberBand> */}
            <div className="stats">
              <h2 className="stats-heading">
                <div className="title">
                  {textState.tablesHead_1}
                  <br />
                  {textState.tablesHead_2} <br />
                  {textState.tablesHead_3}
                </div>
              </h2>

              <table className="mt-2 investor-table">
                <tbody>
                  <img
                    className="graph"
                    src="./assets/vectors/graph.svg"
                    alt="graph"
                  />
                  <tr>
                    <th colSpan="2">{textState.table1Head}</th>
                  </tr>
                  <tr>
                    <td>
                      <h3>{textState.table1Col1_1}</h3>
                      <h5>{textState.table1Col1_2}</h5>
                    </td>
                    <td>
                      <h3>
                        {textState.table1Col2_1}
                        <br /> {textState.table1Col2_2}
                      </h3>
                      <h5>{textState.table1Col2_3}</h5>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table className="mt-2">
                <tbody>
                  <tr>
                    <th colSpan="2">{textState.table2Head}</th>
                  </tr>
                  <tr>
                    <td style={{ width: "152px" }}>
                      <h3>{textState.table2Col1_1}</h3>
                      <h5>{textState.table2Col1_2}</h5>
                    </td>
                    <td>
                      <h3>{textState.table2Col2_1}</h3>
                      <h5>{textState.table2Col2_2}</h5>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="companies">
                <h3>{textState.company1}</h3>
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
            {/* </RubberBand> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Play;
