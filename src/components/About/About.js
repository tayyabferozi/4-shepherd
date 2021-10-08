import React, { useState, useEffect, useContext } from "react";
import Fade from "react-reveal/Fade";

import { LanguageContext } from "../../context/LanguageContext";

const spanishText = {
  heading: "Quienes somos?",
  paragraph:
    "Somos cuatro hermanos que complementamos nuestras habilidades individuales y tecnológicas para desarrollar sistemas de gestión relacionados a las criptomonedas. Hoy generamos un equipo que administra a mas de 1000 personas y contribuye a una causa que esta cambiando la manera de ver el mundo socio-económico.",
  name1: "Dario Ovejero",
  designation1: "Empresario, orador y artista NFT",
  name2: "Adrian Ovejero",
  designation2: "Abogado especialista en criptomonedas",
  name3: "Alejandro Ovejero",
  designation3: "Analista y Programador de la blockchain",
  name4: "Marcos Ovejero",
  designation4: "Productor Audiovisual y especialista en criptos",
  btn: "Conocenos",
};

const engText = {
  heading: "About Us",
  paragraph:
    "We are four brothers who complement our individual and technological skills to develop management systems related to cryptocurrencies. Today we generate a team that manages more than 1000 people and contributes to a cause that is changing the way of seeing the social economic world.",
  name1: "Dario Ovejero",
  designation1: "Businessman, speaker and NFT artist",
  name2: "Adrian Ovejero",
  designation2: "Lawyer specialized in cryptocurrencies",
  name3: "Alejandro Ovejero",
  designation3: "Analyst and Programmer of the blockchain",
  name4: "Marcos Ovejero",
  designation4: "Audiovisual producer and crypto specialist",
  btn: "Know us",
};

const About = () => {
  const { isSpanish } = useContext(LanguageContext);
  const [textState, setTextState] = useState(engText);

  useEffect(() => {
    setTextState(isSpanish ? engText : spanishText);
  }, [isSpanish]);

  return (
    <div id="about-us">
      <Fade>
        <h2 className="text-center my-2">{textState.heading}</h2>
        <h4 className="about-text mx-auto text-center">
          {textState.paragraph}
        </h4>
      </Fade>

      <div className="container-fluid mt-5">
        <div>
          {/* <Fade bottom cascade> */}
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <img src="./assets/images/face-1.png" alt="face-1" />
              <div className="person-info-text">
                <h5>Dario Ovejero</h5>
                <h5>{textState.designation1}</h5>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <img src="./assets/images/face-2.png" alt="face-2" />
              <div className="person-info-text">
                <h5>Adrian Ovejero</h5>
                <h5>{textState.designation2}</h5>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <img src="./assets/images/face-3.png" alt="face-3" />
              <div className="person-info-text">
                <h5>Alejandro Ovejero</h5>
                <h5>{textState.designation3}</h5>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <img src="./assets/images/face-4.png" alt="face-4" />
              <div className="person-info-text">
                <h5>Marcos Ovejero</h5>
                <h5>{textState.designation4}</h5>
              </div>
            </div>
          </div>
          {/* </Fade> */}
        </div>
      </div>

      <a className="btn outlined" href="/">
        {textState.btn}
      </a>
    </div>
  );
};

export default About;
