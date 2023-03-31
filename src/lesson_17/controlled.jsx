import React from "react";
import { useState } from "react";

export const Controlled = () => {
  const [state, setState] = useState("");
  console.log("controlled");
  return (
    <div>
      <span>{state}</span>
      <input type="text" onChange={(e) => setState(e.target.value)} />
    </div>
  );
};
