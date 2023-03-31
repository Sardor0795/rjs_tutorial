import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";

export const Body = ({ data, dellData }) => {
  // const [students, setStudents] = useState(data);

  // useEffect(() => {
  //   setStudents(data);
  // }, [data]);

  return (
    <div style={{ backgroundColor: "coral" }}>
      <h1>Students: {data.length}</h1>
      {data.map((v) => (
        <h1 key={v.id}>
          {v.id} {v.name} <button onClick={() => dellData(v.id)}>dell</button>
        </h1>
      ))}
    </div>
  );
};
