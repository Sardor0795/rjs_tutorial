import React, { useState } from "react";

const WithCounter = (Component) => {
  const Updated = () => {
    const [state, setState] = useState(0);
    const plus = () => {
      setState((p) => p + 1);
    };
    return <Component setState={plus} state={state} />;
  };
  return Updated;
};

export default WithCounter;
