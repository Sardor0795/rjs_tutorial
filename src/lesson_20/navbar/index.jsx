import React from "react";
import { Container, Link } from "./style";

export const NavBar = () => {
  return (
    <Container>
      <Link activeStyle={{ color: "coral" }} exact to={"/"}>
        Logo
      </Link>
      <Link activeStyle={{ color: "coral" }} to={"/home"}>
        Home
      </Link>
      <Link activeStyle={{ color: "coral" }} to={"/about"}>
        About
      </Link>
      <Link activeStyle={{ color: "coral" }} to={"/service"}>
        Service
      </Link>
      <Link activeStyle={{ color: "coral" }} to={"/phone"}>
        Phone
      </Link>
    </Container>
  );
};
