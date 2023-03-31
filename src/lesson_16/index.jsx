import React, { useCallback } from "react";
import { useMemo } from "react";
import { useState } from "react";
import Navbar from "./navbar";

export const LessonSixTeen = () => {
  const [counter, setCounter] = useState(0);
  console.log("Parent comp");

  let data = useMemo(() => {
    return { f: 5 };
  }, []);

  let dataCall = useCallback((prop) => {
    return { f: prop };
  }, []);

  return (
    <div>
      <Navbar call={dataCall} prop={data} />
      <span>Counter: {counter}</span>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
    </div>
  );
};
