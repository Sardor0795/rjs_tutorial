import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Item = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  margin: 0 50px;
`;

export const Container = styled("div")`
  display: flex;
  align-items: center;
  list-style-type: none;
  justify-content: center;
  .active {
    color: red;
  }
`;

export const NavBar = styled("div")`
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #202020;
  color: #fff;
`;
