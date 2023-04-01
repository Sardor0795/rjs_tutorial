import React from "react";
import WithCounter from "./withCounter";

const Hover = ({ state, setState }) => {
  return (
    <div>
      Counter
      <button onMouseEnter={() => setState()}>Hovered {state} times</button>
    </div>
  );
};

export default WithCounter(Hover);
