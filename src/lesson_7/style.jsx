import styled, { keyframes } from "styled-components";

const rotate = keyframes`

  from{
    transform: rotate(0deg);
  }

  to{
    transform: rotate(360deg);
  }

`;

export const Button = styled.div`
  width: 300px;
  height: 50px;
  background-color: coral;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  border-radius: 4px;
  margin: 20px;
  cursor: pointer;
  :active {
    transform: translateY(2px);
  }
`;

export const Btn = styled(Button)`
  width: 500px;
  animation: ${rotate} 5s linear infinite;
`;
