import React from "react";
import { useState } from "react";
import { useReducer } from "react";

export const LessonTwelve = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "plus":
        return state + 1;
      case "minus":
        return state - 1;
      case "byAmount":
        return state + action.payLoad;
      default:
        return state;
    }
  };

  const [counter, dispach] = useReducer(reducer, 0);
  const [amount, setAmount] = useState(0);

  return (
    <div>
      <span>{counter}</span>
      <button onClick={() => dispach({ type: "plus" })}>+</button>
      <button onClick={() => dispach({ type: "minus" })}>-</button>
      <button onClick={() => dispach({ type: "byAmount", payLoad: 10 })}>
        10
      </button>
      <button onClick={() => dispach({ type: "byAmount", payLoad: 70 })}>
        70
      </button>
      <button onClick={() => dispach({ type: "byAmount", payLoad: +amount })}>
        selected
      </button>
      <select onChange={(e) => setAmount(e.target.value)}>
        <option value="1">1</option>
        <option value="5">5</option>
        <option value="10">10</option>
      </select>
    </div>
  );
};
