import React from "react";
import { Body } from "./body";
import { ContextComponent } from "./context";
import { ModeContextComponent } from "./modeContext";
import { Navbar } from "./navbar";
import { Wrapper } from "./wrapper";

export const LessonThirteen = () => {
  return (
    <ModeContextComponent>
      <ContextComponent>
        <Wrapper>
          <Navbar />
          <Body />
        </Wrapper>
      </ContextComponent>
    </ModeContextComponent>
  );
};
