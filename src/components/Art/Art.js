import React, { useState, useEffect, useContext } from "react";

import { LanguageContext } from "../../context/LanguageContext";

const spanishText = {
  mainHeading: "Arte NFT",
  para1:
    "Los NFT fueron furor a principio de año con montos de ventas extraordinarios y piezas polémicas. Muchos artistas volcaron sus obras al mundo digital y se sumaron a una tendencia novedosa que aun genera polémica por los altos valores con los que se comercializan. Una vez que pase la novedad quedaran solo los proyectos que realmente interesen a los coleccionistas del mundo.",
  para2:
    "Ofrecemos servicios para digitalizar piezas de artistas y seguimiento de NFT para inversionistas.",
  btn: "Contactanos",
  card1_1: "Digitalización",
  card1_2: "y conversión",
  card1_3: "a NFT de obras.",
  card2_1: "Consultoría",
  card2_2: "de inversiones",
  card2_3: "en arte NFT",
};

const engText = {
  mainHeading: "NFT Art",
  para1:
    "The NFTs were all the rage at the beginning of the year with extraordinary sales amounts and controversial pieces. Many artists turned their works into the digital world and joined a new trend that still generates controversy due to the high values with which they are marketed. Once the novelty passes, only the projects that really interest the world's collectors will remain.",
  para2:
    "We offer services to digitize artist pieces and NFT tracking for investors.",
  btn: "Contact",
  card1_1: "Digitalización",
  card1_2: "y conversión",
  card1_3: "a NFT de obras.",
  card2_1: "Consultoría",
  card2_2: "de inversiones",
  card2_3: "en arte NFT",
};

const Art = () => {
  const { isSpanish } = useContext(LanguageContext);
  const [textState, setTextState] = useState(engText);

  useEffect(() => {
    setTextState(isSpanish ? engText : spanishText);
  }, [isSpanish]);

  return (
    <div id="art">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-2 pe-4 d-none d-sm-block">
            <img className="art" src="./assets/vectors/art.svg" alt="art" />
          </div>
          <div className="col-sm-10 ps-0 ps-sm-5">
            <h2 className="mb-4">{textState.mainHeading}</h2>

            <h4 className="desc">
              {textState.para1} <br />
              {textState.para2}
            </h4>
            <a href="tel:" className="btn outlined ms-sm-2 mx-auto mx-sm-0">
              {textState.btn}
            </a>

            <div className="cards-container">
              <div className="card">
                <img src="./assets/vectors/art-1.svg" alt="art-1" />
                <h4>
                  {textState.card1_1}
                  <br />
                  {textState.card1_2}
                  <br />
                  {textState.card1_3}
                </h4>
              </div>
              <div className="card">
                <img src="./assets/vectors/art-2.svg" alt="art-2" />
                <h4>
                  {textState.card2_1} <br /> {textState.card2_2} <br />
                  {textState.card2_3}
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
