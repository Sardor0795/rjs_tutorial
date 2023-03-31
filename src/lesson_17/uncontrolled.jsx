import React from "react";
import { useRef } from "react";

export const Uncontrolled = () => {
  let title = useRef("");
  console.log(title);
  return (
    <div>
      <input ref={title} type="text" />
      <button onClick={() => alert(title.current.value)}>alert</button>
    </div>
  );
};
