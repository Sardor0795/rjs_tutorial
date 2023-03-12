import React from "react";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();
  const Back = () => {
    navigate(-1);
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Page not found</h1>
      <button onClick={Back}>Back</button>
    </div>
  );
};
