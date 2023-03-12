import React from "react";
import { Item, Navbar } from "./style";

export const NavBar = () => {
  return <Navbar>

        <Item to={'/home'}>Home</Item>
        <Item to={'/shop'}>Shop</Item>
        <Item to={'/plant'}>Plant Care</Item>
        <Item to={'/blogs'}>Blogs</Item>

  </Navbar>;
};
