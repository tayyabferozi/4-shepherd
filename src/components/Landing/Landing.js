import { useContext, useState, useEffect } from "react";
import Fade from "react-reveal/Fade";

import { LanguageContext } from "../../context/LanguageContext";

const spanishText = {
  mainHeading1: "Administramos",
  mainHeading2: "miles de NFT en Latinoamérica",
  subHeading:
    "Gestionamos inversiones en criptoactivos que generan rentas pasivas con herramientas a medida para grandes escalas",
};

const engText = {
  mainHeading1: "We manage",
  mainHeading2: "thousands of NFT",
  subHeading:
    "We manage investments in cryptoassets that generates passive incomes with custom tools for large scales",
};

const Landing = () => {
  const { isSpanish } = useContext(LanguageContext);
  const [textState, setTextState] = useState(engText);

  useEffect(() => {
    setTextState(isSpanish ? engText : spanishText);
  }, [isSpanish]);

  return (
    <div id="landing">
      <img className="bg" src="./assets/vectors/landing-bg.svg" alt="landing" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5">
            <div>
              <Fade bottom cascade>
                <div>
                  <h1 className=" mb-4 lh-1">
                    {textState.mainHeading1} <br /> {textState.mainHeading2}
                  </h1>
                  <h3>{textState.subHeading}</h3>
                </div>
              </Fade>
            </div>
          </div>
          <div className="col-md-7">
            {/* <Fade top> */}
            <img
              className="landing-right"
              src="./assets/vectors/landing-right.svg"
              alt="landing-right"
            />
            {/* </Fade> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
