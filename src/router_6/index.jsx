import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Body } from "./body";
import { Navbar } from "./navbar";

export const ReactDomSix = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Body />
      </Router>
    </div>
  );
};
