import React from "react";
import { Department } from "./Department";
import { Students } from "./Students";
import { Trucks } from "./Trucks";
import { Cars } from "./Cars";

export const Context = ({ children }) => {
  return (
    <Department>
      <Cars>
        <Trucks>
          <Students>{children}</Students>
        </Trucks>
      </Cars>
    </Department>
  );
};
