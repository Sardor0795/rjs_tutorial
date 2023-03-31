import React from "react";
import { DepartmentCon } from "./Department";

export const Cars = () => {
  const dep = DepartmentCon();
  return <div>{dep}</div>;
};
