import { useContext, useState, useEffect } from "react";
import Bounce from "react-reveal/Bounce";

import { LanguageContext } from "../../context/LanguageContext";

const engText = {
  feature1_1: "Bots for creation of",
  feature1_2: "massive tasks",
  feature2_1: "Tracking apps",
  feature2_2: "yields",
  feature3_1: "Artificial intelligence",
  feature3_2: "and data analytics",
};

const spanishText = {
  feature1_1: "Bots para creación",
  feature1_2: "de tareas masivas",
  feature2_1: "de rendimientos",
  feature2_2: "yields",
  feature3_1: "Inteligencia artificial",
  feature3_2: "y analítica de datos",
};

const Features = () => {
  const { isSpanish } = useContext(LanguageContext);
  const [textState, setTextState] = useState(engText);

  useEffect(() => {
    setTextState(isSpanish ? engText : spanishText);
  }, [isSpanish]);

  return (
    <div id="features">
      <h2 className="mb-3 text-center">
        <Bounce cascade>Nuestras herramientas incluyen</Bounce>
      </h2>
      <div>
        <Bounce cascade>
          <div className="d-flex justify-content-center align-items-center features-main">
            <div className="feauture-img-container">
              <img src="./assets/vectors/features-1.svg" alt="" />
              <h3 className="feature-text">
                {textState.feature1_1} <br /> {textState.feature1_2}
              </h3>
            </div>
            <div className="feauture-img-container">
              <img src="./assets/images/features-2.png" alt="" />
              <h3 className="feature-text">
                {textState.feature2_1} <br /> {textState.feature2_2}
              </h3>
            </div>
            <div className="feauture-img-container">
              <img src="./assets/vectors/features-3.svg" alt="" />
              <h3 className="feature-text">
                {textState.feature3_1} <br /> {textState.feature3_2}
              </h3>
            </div>
          </div>
        </Bounce>
      </div>
      <img className="coins" src="./assets/vectors/coins-.svg" alt="coints" />
    </div>
  );
};

export default Features;
