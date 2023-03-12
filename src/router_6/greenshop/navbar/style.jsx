import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Navbar = styled.div`
  padding-top: 20px;
  border-bottom: 1px solid rgba(70, 163, 88, 0.5);
  .active {
    font-weight: 700;
    border-bottom: 3px solid rgba(70, 163, 88, 1);
  }
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Item = styled(NavLink)`
  color: #3d3d3d;
  text-decoration: none;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  margin: 0 20px;
  padding-bottom: 20px;
`;
