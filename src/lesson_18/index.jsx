import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export const LessonEighteen = () => {
  const [state, setState] = useState([]);
  const [selected, setSelected] = useState({});

  const getData = (id) => {
    return fetch(
      `https://jsonplaceholder.typicode.com/users${id ? `/${id}` : ""}`,
      {
        method: "get",
      }
    ).then((res) => res.json());
  };

  useEffect(() => {
    getData().then((res) => setState(res));
  }, []);

  const setInfo = (id) => {
    getData(id).then((res) => setSelected(res));
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: "1" }}>
        {state.map((v) => (
          <h1 key={v.id}>
            {v.id} {v.name}
            <button onClick={() => setInfo(v.id)}>id</button>
          </h1>
        ))}
      </div>
      <div style={{ flex: "1" }}>
        <h1>Name: {selected?.name}</h1>
        <h2>Email: {selected?.email}</h2>
        <h3>Web Site: {selected?.website}</h3>
        <h4>Phone: {selected?.phone}</h4>
      </div>
    </div>
  );
};
