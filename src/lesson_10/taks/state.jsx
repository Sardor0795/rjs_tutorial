import React from "react";
import { useState } from "react";

export const State = () => {
  const [state, setState] = useState(0);
  return (
    <div>
      State {state}
      <button onClick={() => setState(state + 1)}>+</button>
    </div>
  );
};
