import React, { createContext, useState } from "react";
import { IS_SPANISH } from "../constants";

export const LanguageContext = createContext({});

export const LanguageContextProvider = (props) => {
  const toggleIsSpanish = () => {
    setState((prevState) => {
      const prevIsSpanish = prevState.isSpanish;
      localStorage.setItem(IS_SPANISH, prevIsSpanish);
      return { ...prevState, isSpanish: !prevIsSpanish };
    });
  };
  const initState = {
    isSpanish: false,
    toggleIsSpanish,
  };
  const [state, setState] = useState(initState);

  // useEffect(() => {
  //   const isSpanishStorage = localStorage.getItem(IS_SPANISH) === "true";
  //   setState({ ...state, isSpanish: isSpanishStorage });
  // }, []);

  return (
    <LanguageContext.Provider value={state}>
      {props.children}
    </LanguageContext.Provider>
  );
};
