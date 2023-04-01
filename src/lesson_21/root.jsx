import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { About } from "./about";
import { Call } from "./call";
import { Home } from "./home";
import { Navbar } from "./navbar";
import { Single } from "./single";

export const Root = () => {
  const location = useLocation();
  let token = JSON.parse(localStorage.getItem("token"));
  return (
    <div>
      <h1>Path: {location.pathname}</h1>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route element={<Navbar />}>
          <Route path="/home" element={<Home />} />
          <Route
            path="/office"
            element={token ? <About /> : <Navigate to={"/call"} />}
          />
          <Route path="/call" element={<Call />} />
          <Route path="/home/:id" element={<Single />} />
        </Route>
        {/* <Route path="*" element={<h1>Not found</h1>} /> */}
      </Routes>
    </div>
  );
};
