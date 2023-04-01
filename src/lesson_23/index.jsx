import React, { Suspense } from "react";
import { useTransition } from "react";
import { useState } from "react";
// import { flushSync } from "react-dom";

const Fetch = React.lazy(() => import("./fetch"));

export const ReactEighteen = () => {
  const [state, setState] = useState("");
  const [list, setList] = useState([]);

  const [isPending, startTransition] = useTransition();

  const func = ({ target: { value } }) => {
    setState(value);
    startTransition(() => {
      getList(value);
    });
  };

  const getList = (state) => {
    let l = [];
    for (let i = 0; i < 2000; i++) {
      l.push(`${i} ${state}`);
    }
    setList(l);
  };

  return (
    <div>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Fetch />
        <Fetch />
        <Fetch />
      </Suspense>
      <h1>{state}</h1>
      <input type="text" value={state} onChange={func} />
      {isPending ? "loading..." : list.map((v, i) => <h1 key={i}>{v}</h1>)}
    </div>
  );
};

//   const plus = () => {
//     flushSync(() => {
//       setState(stste + 1);
//     });
//     flushSync(() => {
//       setCount(count + 1);
//     });
//   };
