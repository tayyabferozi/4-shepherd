import React, { useState, useEffect, useContext } from "react";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

import { LanguageContext } from "../../context/LanguageContext";

const spanishText = {
  q1: "Que servicio ofrecen?",
  a1: "Somos el nexo entre los inversores y jugadores de mundo “play to earn”, administramos en grandes cantidades jugadores y rentas en criptomonedas de manera segura y transparente. Administrar hasta 10 jugadores puede ser tarea fácil, pero cuando las cantidades superan los 30 equipos se torna muy dificil hacer un seguimiento y gestionar recompensas. Es por eso que nos especializamos en generar herramientas para administrar grandes flujos de operaciones.",
  q2: "Que tan riesgosas son las inversiones?",
  a2: "Todas lo relacionado a las criptomonedas se considera de riesgo elevado, pero al tener tan buenos rendimientos los tiempos de recupero de capital son mucho menores a cualquier otro tipo de inversion conocida.",
  q3: "Que garantias hay?",
  a3: "Garantizamos la gestión y seguridad sobre todos nuestros procesos internos. Como toda inversión el riesgo existe, y si bien la seleccion de los proyectos se basa en la seguridad que los mismos brindan, las fluctuaciones del mercado cripto pueden ser muy grandes y esa volatilidad no tiene garantías.",
  q4: "Que tan sustentables son a largo plazo?",
  a4: "Creemos que estos proyectos estan en una etapa inicial, con un gran futuro por delante que puede cambiar la forma de ver las economias del mundo. Y no es exagerar, teniendo en cuenta que en países como Filipinas este modelo supero el PBI de la nación y ya estan evaluando cobrar impuestos a quienes juegan para ganar dinero.",
};

const engText = {
  q1: "What service do you offer?",
  a1: 'We are the nexus between investors and players in the world "play to earn", we manage large amounts of players and income in cryptocurrencies in a safe and transparent way. Managing up to 10 players can be an easy task, but when the numbers exceed 30 teams it becomes very difficult to keep track and manage rewards. That is why we specialize in generating tools to manage large flows of operations.',
  q2: "How risky are the investments?",
  a2: "Everything related to cryptocurrencies is considered high risk, but having so good returns capital recovery times are much shorter than any other type of known investment.",
  q3: "What guarantees are there?",
  a3: "We guarantee the management and security of all our internal processes. Like any investment, risk exists, and although the selection of projects is based on the security they provide, fluctuations in the crypto market can be very large and that volatility has no guarantees.",
  q4: "How sustainable are they in the long term?",
  a4: "We believe that these projects are in an initial stage, with a great future ahead that can change the way of seeing the world's economies. And it is not an exaggeration, taking into account that in countries like the Philippines this model exceeded the nation's GDP and they are already evaluating taxing those who gamble to earn money.",
};

const FAQ = () => {
  const { isSpanish } = useContext(LanguageContext);
  const [textState, setTextState] = useState(engText);

  useEffect(() => {
    setTextState(isSpanish ? engText : spanishText);
  }, [isSpanish]);

  return (
    <div id="FAQ" className="">
      <h1 className="text-center text-white mb-5">FAQ</h1>

      <div className="faqs-container">
        <div>
          <Fade cascade>
            <div className="faqs">
              <div className="question">
                <h2>{textState.q1}</h2>
                <p>{textState.a1}</p>
              </div>
              <div className="question">
                <h2>{textState.q2}</h2>
                <p>{textState.a2}</p>
              </div>
              <div className="question">
                <h2>{textState.q3}</h2>
                <p>{textState.a3}</p>
              </div>
              <div className="question">
                <h2>{textState.q4}</h2>
                <p>{textState.a4}</p>
              </div>
            </div>
          </Fade>
        </div>
        <Zoom>
          <img
            className="question-mark"
            alt="question-mark"
            src="./assets/vectors/question-mark.svg"
          />
        </Zoom>
      </div>
    </div>
  );
};

export default FAQ;
