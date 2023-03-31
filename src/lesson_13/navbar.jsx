import React from "react";
import { useContext } from "react";
import { StudentContext } from "./context";
import { ModeContext } from "./modeContext";

export const Navbar = () => {
  const [data] = useContext(StudentContext);

  const [dark, setDark] = useContext(ModeContext);

  const setToggleLight = () => {
    localStorage.setItem("dark", "false");
    setDark(false);
  };
  const setToggleDark = () => {
    localStorage.setItem("dark", "true");
    setDark(true);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        backgroundColor: dark ? "black" : "blue",
        color: dark ? "#fff" : "#000",
      }}
    >
      <h1>students: {data.length}</h1>
      <h1>about</h1>
      <h1>menu</h1>
      <h1>search</h1>
      <h1>find</h1>
      <button onClick={setToggleDark}>dark</button>
      <button onClick={setToggleLight}> light</button>
    </div>
  );
};
