import React, { useState } from "react";
import { useEffect } from "react";
import { Task } from "./taks";

export const FuncComp = () => {
  //   const state = useState(20);
  //   const [count, setCount] = useState(20);

  //   let arr = ["apple", "orange"];

  //   let [o, or] = arr;

  //   console.log(o, or);

  //   console.log(state);

  //   const [title, setTitle] = useState("Title");

  const [data, setData] = useState({
    title: "Title",
    count: 2,
  });

  const plus = () => {
    setData({ ...data, count: data.count + 1 });
    // console.log(data.count);
  };

  useEffect(() => {
    console.log(data.count);
  }, [data.count]);

  return (
    <div style={{ flex: "1" }}>
      Func comp
      <span>{data.count}</span>
      <button onClick={plus}>+</button>
      <button onClick={() => setData({ ...data, count: data.count - 1 })}>
        -
      </button>
      <div>{data.title}</div>
      <input
        type="text"
        value={data.title}
        onChange={({ target: { value } }) => setData({ ...data, title: value })}
      />
      <Task />
    </div>
  );
};

// return vs without return

// export const FuncWComp = () => (
//   <div>
//     Func comp <p></p>
//   </div>
// );
