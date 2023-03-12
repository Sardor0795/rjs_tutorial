import React from "react";
import { Container, Item, NavBar } from "./style";
import { Outlet } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <NavBar>
        <Container className="navList">
          <Item to={"/home"}>Logo</Item>
          <Item to={"/menu"}>Menu</Item>
          <Item to={"/comp"}>Comp</Item>
          <Item to={"/support"}>Support</Item>
          <Item to={"/signin"}>Sign In</Item>
        </Container>
      </NavBar>
      <Outlet />
    </div>
  );
};
