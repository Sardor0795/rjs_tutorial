import React from "react";
import { useEffect, useId } from "react";

export const Fetch = () => {
  const id = useId();
  console.log(id);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/");
  }, []);
  return <div>Fetch</div>;
};

export default Fetch;
