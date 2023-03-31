import React from "react";
import { useContext } from "react";
import { createContext } from "react";

const DepartmentContext = createContext();
export const DepartmentCon = () => useContext(DepartmentContext);

export const Department = ({ children }) => {
  return (
    <DepartmentContext.Provider value={"hey"}>
      {children}
    </DepartmentContext.Provider>
  );
};
