import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const ModeContext = createContext();

export const ModeContextComponent = ({ children }) => {
  const [dark, setDark] = useState(
    localStorage.getItem("dark") === "true" ? true : false
  );
  console.log(localStorage.getItem("dark"));
  return (
    <ModeContext.Provider value={[dark, setDark]}>
      {children}
    </ModeContext.Provider>
  );
};
