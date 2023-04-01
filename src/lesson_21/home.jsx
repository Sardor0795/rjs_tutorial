import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const [data] = useState([
    { id: 1, name: "Jon", place: "Argentina", status: "dev" },
    { id: 2, name: "Ann", place: "Mexico", status: "mobile" },
    { id: 3, name: "Web", place: "America", status: "dev" },
    { id: 4, name: "Rocky", place: "Italy", status: "front" },
    { id: 5, name: "Jeb", place: "Rum", status: "dev" },
    { id: 6, name: "Jimmy", place: "Chily", status: "back" },
    { id: 7, name: "Alice", place: "Argentina", status: "dev" },
  ]);
  const navigate = useNavigate();
  return (
    <div>
      Home
      <div>
        {data.map((v) => (
          <h1 key={v.id}>
            {v.id} {v.name} {v.place} {v.status}
            <button onClick={() => navigate(`/home/:${v.id}`)}>select</button>
          </h1>
        ))}
      </div>
    </div>
  );
};
