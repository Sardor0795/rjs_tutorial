import React, { memo } from "react";
import { SubChild } from "./subChild";

const Navbar = ({ prop, call }) => {
  console.log("Child comp");
  return (
    <div>
      <span>{prop.f}</span>
      Navbar
      <span>{call("HEader").f}</span>
      <span>{call("About").f}</span>
      <span>{call("Title").f}</span>
      <SubChild />
    </div>
  );
};

export default memo(Navbar);
