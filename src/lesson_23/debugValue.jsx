import React from "react";
import { useDebugValue } from "react";

export function useLocaleStorage() {
  const [value, setValue] = useState("webbrain");

  // useDebugValue(getSlowValue(value))
  useDebugValue(value, (e) => getSlowValue(e));

  return [value, setValue];
}
const getSlowValue = (value) => {
  for (let i = 0; i < 2000; i++) {
    return value;
  }
};

export default useLocaleStorage;
