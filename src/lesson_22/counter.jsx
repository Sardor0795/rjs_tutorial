import React from "react";
import WithCounter from "./withCounter";

export const Counter = ({ state, setState }) => {
  return (
    <div>
      Counter
      <button onClick={() => setState()}>Clicked {state} times</button>
    </div>
  );
};

export default WithCounter(Counter);
