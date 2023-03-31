import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export const LessonFifteen = () => {
  const [state, setState] = useState(+localStorage.getItem("state"));
  const plus = () => {
    setState(state + 1);
  };
  const minus = () => {
    setState(state - 1);
  };

  useEffect(() => {
    localStorage.setItem("state", state);
  }, [state]);

  const clear = () => {
    setState(0);
    localStorage.clear();
  };

  const removeState = () => {
    localStorage.removeItem("state");
    setState(0);
  };

  const setObj = () => {
    localStorage.setItem("obj", JSON.stringify({ count: 0 }));
  };
  const getObj = () => {
    console.log(JSON.parse(localStorage.getItem("obj")));
  };
  return (
    <div>
      <span>{state}</span>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
      <button onClick={removeState}>remove Item</button>
      <button onClick={clear}>clear</button>
      <button onClick={setObj}>set obj</button>
      <button onClick={getObj}>get obj</button>
    </div>
  );
};
