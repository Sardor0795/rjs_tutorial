import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const data = [
  { id: 1, name: "Jon", place: "Argentina", status: "dev" },
  { id: 2, name: "Ann", place: "Mexico", status: "mobile" },
  { id: 3, name: "Web", place: "America", status: "dev" },
  { id: 4, name: "Rocky", place: "Italy", status: "front" },
  { id: 5, name: "Jeb", place: "Rum", status: "dev" },
  { id: 6, name: "Jimmy", place: "Chily", status: "back" },
  { id: 7, name: "Alice", place: "Argentina", status: "dev" },
];

export const Single = () => {
  const params = useParams();

  const [selected, setSelected] = useState({});
  useEffect(() => {
    let res = data.filter((v) => v.id === +params.id.replace(":", ""));
    setSelected(...res);
  }, [params?.id]);
  return (
    <h1>
      {selected.id} {selected.name} {selected.place} {selected.status}
    </h1>
  );
};
