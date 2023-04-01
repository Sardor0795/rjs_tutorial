import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  height: 60px;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: #fff;
`;
