import styled, { css } from "styled-components";

export const Container = styled("div")`
  font-weight: 800;
  background-color: coral;
  display: flex;
`;

export const Title = styled.h1`
  color: blue;
`;

const common = css`
  background-color: #fff;
  font-weight: 800;
`;

const getSize = (pr) => {
  switch (pr.size) {
    case "large":
      return "200px";
    case "medium":
      return "150px";
    case "small":
      return "100px";
    default:
      return "150px";
  }
};

export const Box = styled.div`
  width: ${getSize};
  height: ${getSize};
  border: 2px solid #000;
  margin: 15px;
  display: flex;
  align-items: center;
  justify-content: ${({ left }) => (left ? "left" : "center")};
  ${common}
  background-color: ${(props) => props.bg};
`;
