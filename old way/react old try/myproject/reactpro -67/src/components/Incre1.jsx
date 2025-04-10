import { useState } from "react";

export default function Incre1() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(setCount + 1);
  }
  return (
    <>
      <h2>{count}</h2>
      <button onClick={increase}>inc</button>
    </>
  );
}
