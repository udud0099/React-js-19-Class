import { useMemo, useState } from "react";

export default function Memo() {
  const [add, setAdd] = useState(0);
  const [state, setState] = useState(false);
  function addition() {
    setAdd(add + 1);
  }
  function count(add) {
    console.log("function run", add);
    for (let i = 0; i < 1000000000; i++) {}
    return add;
  }
  let number = useMemo(() => {
    return count(add);
  }, [add]);
  return (
    <>
      <h1>Moya Moya </h1>
      <button onClick={addition}>Addition</button>
      <h1>add: {number}</h1>
      <button onClick={() => setState(!state)}>Please Click</button>
      <h1>{state ? "you click" : "plz click"}</h1>
    </>
  );
}
