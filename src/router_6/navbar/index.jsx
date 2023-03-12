import React from "react";

import { Container, Item, NavBar } from "./style";

export const Navbar = () => {
  return (
    <NavBar>
      <Container className="navList">
        <Item to={"/home"}>Logo</Item>
        <Item to={"/menu"}>Menu</Item>
        <Item to={"/comp"}>Comp</Item>
        <Item to={"/support"}>Support</Item>
      </Container>
    </NavBar>
  );
};
