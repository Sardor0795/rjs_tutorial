import React from "react";
import { useState } from "react";
import { Body } from "./body";
import { Navbar } from "./navbar";

export const LessonThirteen = () => {
  const [data, setData] = useState([
    { id: 1, name: "Eshmat" },
    { id: 2, name: "Jon" },
    { id: 3, name: "Lily" },
    { id: 4, name: "Elly" },
    { id: 5, name: "Eshmat" },
  ]);

  const dellData = (id) => {
    setData(data.filter((v) => v.id !== id));
  };

  return (
    <div>
      <Navbar data={data} />
      <Body dellData={dellData} data={data} />
    </div>
  );
};
