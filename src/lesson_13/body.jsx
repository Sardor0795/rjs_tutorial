import React from "react";
import { useContext } from "react";
import { StudentContext } from "./context";

export const Body = () => {
  const [st, setSt] = useContext(StudentContext);

  const dellData = (id) => {
    let res = st.filter((v) => v.id !== id);
    setSt(res);
  };

  return (
    <div style={{ backgroundColor: "coral" }}>
      <h1>Students: {st.length}</h1>
      {st.map((v) => (
        <h1 key={v.id}>
          {v.id} {v.name} <button onClick={() => dellData(v.id)}>dell</button>
        </h1>
      ))}
    </div>
  );
};
