import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export const Home = () => {
  const [state] = useState([
    { id: 1, name: "jon" },
    { id: 2, name: "jon" },
    { id: 3, name: "Ann" },
    { id: 4, name: "jon" },
    { id: 5, name: "jon" },
  ]);
  const [selected] = useState({});
  const history = useHistory();
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: "1" }}>
        {state.map((v) => (
          <h1 key={v.id}>
            {v.id} {v.name}{" "}
            <button onClick={() => history.push(`/home/:${v.id}`)}>
              Select
            </button>
          </h1>
        ))}
      </div>
      <div style={{ flex: "1" }}>
        <h1>
          Selected: {selected?.id} {selected?.name}
        </h1>
      </div>
    </div>
  );
};
