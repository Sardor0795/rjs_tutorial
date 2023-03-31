import React, { createContext } from "react";
import { useState } from "react";

export const StudentContext = createContext();

export const ContextComponent = ({ children }) => {
  const [state, setState] = useState([
    { id: 1, name: "Eshmat" },
    { id: 2, name: "Jon" },
    { id: 3, name: "Lily" },
    { id: 4, name: "Elly" },
    { id: 5, name: "Eshmat" },
  ]);

  return (
    <StudentContext.Provider value={[state, setState]}>
      {children}
    </StudentContext.Provider>
  );
};
