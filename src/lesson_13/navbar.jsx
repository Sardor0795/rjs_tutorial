import React from "react";
import { useContext } from "react";
import { StudentContext } from "./context";

export const Navbar = () => {
  const [data] = useContext(StudentContext);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        backgroundColor: "blue",
      }}
    >
      <h1>students: {data.length}</h1>
      <h1>about</h1>
      <h1>menu</h1>
      <h1>search</h1>
      <h1>find</h1>
    </div>
  );
};
