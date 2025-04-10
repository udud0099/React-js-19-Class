import { useState } from "react";
// v22
export default function IncDecByNY() {
  const [num, setNum] = useState(0);
  function dec() {
    if (num == 0) {
      alert("0 can't be dec");
    } else {
      setNum(num - 1);
    }
  }
  function inc() {
    setNum(num + 1);
  }
  return (
    <>
      <h1>{num}</h1>
      <button onClick={dec}>dec --</button>
      <button onClick={inc}>inc ++</button>
    </>
  );
}
