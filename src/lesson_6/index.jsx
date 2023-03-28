import React, { Component } from "react";
import { Box, Container, Title } from "./style";

export default class LessonSix extends Component {
  render() {
    return (
      <Container>
        <Title>LessonSix</Title>
        <Box bg="yellow" size="large">large</Box>
        <Box bg="white" left size="medium">medium</Box>
        <Box bg="red" size="small">small</Box>
      </Container>
    );
  }
}
