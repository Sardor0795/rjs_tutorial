import React from "react";
import { Body } from "./body";
import { ContextComponent } from "./context";
import { Navbar } from "./navbar";

export const LessonThirteen = () => {
  return (
    <ContextComponent>
      <Navbar />
      <Body />
    </ContextComponent>
  );
};
