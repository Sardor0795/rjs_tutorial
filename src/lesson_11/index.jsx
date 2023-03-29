import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export const LessonEleven = (p) => {
  const [state, setState] = useState(p.s);
  const [name, setName] = useState("Name");

  // ---------------

  // case 3
  useEffect(() => {
    console.log("Case 3");
    setState(p.s);
  }, [p.s]);

  // ---------------

  // case 1
  useEffect(() => {
    console.log("Case 1");
  });

  // case 2
  useEffect(() => {
    console.log("Case 2");
  }, []);

  // case 3
  useEffect(() => {
    console.log("Case 3");
  }, [name]);

  // case 4
  useEffect(() => {
    console.log("Case 4");
  }, [name, state]);

  return (
    <div>
      <span>{state}</span>
      <span>{name}</span>
      <hr />
      <input
        type="text"
        value={name}
        onChange={({ target: { value } }) => setName(value)}
      />
      <button onClick={() => setState(state + 1)}>+</button>
    </div>
  );
};
