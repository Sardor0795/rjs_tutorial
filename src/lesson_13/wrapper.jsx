import React from "react";
import { useContext } from "react";
import { ModeContext } from "./modeContext";

export const Wrapper = ({ children }) => {
  const [dark] = useContext(ModeContext);
  return (
    <div style={{ backgroundColor: dark ? "#000" : "#fff", height: "100vh" }}>
      {children}
    </div>
  );
};
