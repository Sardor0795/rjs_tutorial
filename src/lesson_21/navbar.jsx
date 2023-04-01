import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          height: "60px",
          alignItems: "center",
          backgroundColor: "coral",
        }}
      >
        <NavLink to={"/"}>Logo</NavLink>
        <NavLink to={"/home"}>Home</NavLink>
        <NavLink to={"/office"}>Office</NavLink>
        <NavLink to={"/call"}>Sign In</NavLink>
        <NavLink to={"/single"}>Single</NavLink>
      </div>
      <Outlet />
    </>
  );
};
