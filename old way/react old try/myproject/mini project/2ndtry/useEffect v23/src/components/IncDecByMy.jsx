import { useEffect, useState } from "react";
// v22
export default function IncDecByNY() {
  const [num, setNum] = useState(0);
  const [data, setData] = useState("This is for before use state");
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
  function usingUseeffect() {
    setData(
      "after click button and we call date throw use effect. because the date is update (change) hear. i want to watch date var track"
    );
  }
  useEffect(() => {
    alert("chaeking use effect");
    console.log("useing useEffect");
  }, [data]);
  return (
    <>
      <h1>{data}</h1>
      <h1>{num}</h1>
      <button onClick={dec}>dec --</button>
      <button onClick={inc}>inc ++</button>
      <button onClick={usingUseeffect}>useEffect</button>
    </>
  );
}
