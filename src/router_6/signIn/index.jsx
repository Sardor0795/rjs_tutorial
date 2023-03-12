import React from "react";
import { useNavigate } from "react-router-dom";

export const SignIn = () => {
  const navigate = useNavigate();
  const onSubmit = () => {
    navigate("/home");
  };
  return (
    <div>
      <button onClick={onSubmit}>submit</button>
    </div>
  );
};
