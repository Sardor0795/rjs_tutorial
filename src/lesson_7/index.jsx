import React, { Component } from "react";
import { Btn, Button } from "./style";

import { ThemeProvider, createGlobalStyle } from "styled-components";

export default class LessonSeven extends Component {
  state = {
    light: true,
  };
  render() {
    const GlobalStyles = createGlobalStyle`

      body {
        background-color: ${(props) => props.theme.bg};
        color: ${(props) => props.theme.color};
      }

    `;

    const theme = {
      bg: this.state.light ? "white" : "black",
      color: this.state.light ? "black" : "white",
    };

    const switchDark = () => {
      this.setState({ light: !this.state.light });
    };

    return (
      <>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Button onClick={switchDark}>Button</Button>
          <Btn>Btn</Btn>
        </ThemeProvider>
      </>
    );
  }
}
