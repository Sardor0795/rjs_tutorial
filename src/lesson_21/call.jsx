import React from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export const Call = () => {
  const logRef = useRef("");
  const passRef = useRef("");
  const navigate = useNavigate();
  const submit = () => {
    if (
      logRef.current.value === "sardor" &&
      passRef.current.value === "12345"
    ) {
      localStorage.setItem("token", true);
      alert("Welcome back");
      navigate("/office");
    } else {
      localStorage.setItem("token", false);
      alert("Error in password or login");
    }
  };

  return (
    <div>
      Sign in
      <div>
        Login: <input ref={logRef} type="text" /> Password:{" "}
        <input ref={passRef} type="password" />
      </div>
      <button onClick={submit}>Submit</button>
    </div>
  );
};
