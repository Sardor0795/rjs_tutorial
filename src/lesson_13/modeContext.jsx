import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const ModeContext = createContext();

export const ModeContextComponent = ({ children }) => {
  const [dark, setDark] = useState(false);

  return (
    <ModeContext.Provider value={[dark, setDark]}>
      {children}
    </ModeContext.Provider>
  );
};
