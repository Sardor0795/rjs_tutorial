import React, { useDeferredValue } from "react";
import { useMemo } from "react";

export const List = ({ value }) => {
  const defValue = useDeferredValue(value);

  const list = useMemo(() => {
    let l = [];
    for (let i = 0; i < 2000; i++) {
      l.push(`${defValue}`);
    }
    return l;
  }, []);

  const isPending = value !== defValue;

  //   return isPending ? "loading" : list;
  return list;
};
