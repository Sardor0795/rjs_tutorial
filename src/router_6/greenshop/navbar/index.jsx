import React from "react";
import { Item, Navbar } from "./style";

const data = [
  { path: "/home", title: "Home" },
  { path: "/shop", title: "Shop" },
  { path: "/plant", title: "Plant Care" },
  { path: "/blogs", title: "Blogs" },
];

export const NavBar = () => {
  return (
    <Navbar>
      {data.map((v) => {
        return <Item to={v.path}>{v.title}</Item>;
      })}
    </Navbar>
  );
};
